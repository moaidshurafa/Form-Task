import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import PreviousAndNext from "./Previous&Next";
import Search from "./Search";
import Error from "./Error";
import Loading from "./Loading";
import UserCard from "./UsersCard";
import AddUser from "./AddUserModal";
import { v4 as uuidv4 } from "uuid";

const SKELETON_COUNT = 5;
const NUMBER_OF_CARDS = 5;

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const filterdUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name?.toLowerCase().includes(term) ||
      user.email?.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filterdUsers.length / NUMBER_OF_CARDS);
  const startIndex = (currentPage - 1) * NUMBER_OF_CARDS;
  const currentUsers = filterdUsers.slice(
    startIndex,
    startIndex + NUMBER_OF_CARDS
  );
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, { ...newUser, id: uuidv4() }];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUsers.length > 0) {
      setUsers(storedUsers);
      setLoading(false);
    } else {
      getUsers()
        .then((data) => {
          if (data) {
            setUsers(data);
            localStorage.setItem("users", JSON.stringify(data));
          }
        })
        .catch((err) => {
          setError("fetching data failed, try again. " + err.message);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          type="button"
          onClick={handleOpenModal}
          className="text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          + Add User
        </button>
      </div>
      <AddUser
        isOpen={openModal}
        onClose={handleCloseModal}
        onUserAdded={handleUserAdded}
      />

      {error && <Error error={error} />}
      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <Loading SKELETON_COUNT={SKELETON_COUNT} />
        ) : (
          <UserCard currentUsers={currentUsers} />
        )}
      </div>
      <PreviousAndNext
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default MainPage;
