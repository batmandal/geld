"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, useContext } from "react";
import { api } from "@/common/axios";
import { toast } from "react-toastify";

import * as icons from "@/icons/category-icons";

Object.values(icons);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState(false);
  const [isIcon, setIsIcon] = useState(Object.keys(icons)[12]);
  const [isColor, setIsColor] = useState("#000");
  const [isModal, setIsModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [recordIcon, setRecordIcon] = useState("");
  const [categories, setCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [recordColor, setRecordColor] = useState("");
  const [refresh, setRefresh] = useState(0);

  const router = useRouter();

  const logIn = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("log-in", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("sign-up", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.romoveItem("token");

    setIsLoggedIn(false);

    router.push("/log-in");
  };

  const addCategory = async (categoryName, isIcon, isColor) => {
    try {
      const { data } = await api.post(
        "/categories",
        {
          categoryName,
          isIcon,
          isColor,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setRefresh(refresh + 1);
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      }
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await api.get("/categories", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setCategories(data);
      // console.log("data", data);
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      }
    }
  };

  const addRecord = async (
    amount,
    // date,
    // time,
    // payee,
    note,
    recordType,
    name,
    recordIcon,
    recordColor
  ) => {
    try {
      const { data } = await api.post(
        "/records",
        {
          amount,
          // date,
          // time,
          // payee,
          note,
          recordType,
          name,
          recordIcon,
          recordColor,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setRefresh(refresh + 1);
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      }
    }
  };

  const getRecords = async () => {
    try {
      const { data } = await api.get("/records", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      // console.log("recorddata", data);
      setRecords(data);
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) setIsLoggedIn(true);

    setIsReady(true);
  }, []);

  useEffect(() => {
    getCategories();
    getRecords();
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        page,
        setPage,
        addRecord,
        getRecords,
        addCategory,
        getCategories,
        logIn,
        signUp,
        display,
        setDisplay,
        isColor,
        setIsColor,
        isIcon,
        setIsIcon,
        isModal,
        setIsModal,
        isLoading,
        setIsLoading,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        categoryName,
        setCategoryName,
        name,
        setName,
        categories,
        setCategories,
        isShow,
        setIsShow,
        recordIcon,
        setRecordIcon,
        recordColor,
        setRecordColor,
        records,
        setRecords,
      }}
    >
      {isReady && children}

      <span open={!isReady} className="w-full h-screen bg-green-200"></span>
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
