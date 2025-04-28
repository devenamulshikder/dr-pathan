import toast from "react-hot-toast";
const getStoredDoctor = () => {
  const storedDoctorStr = localStorage.getItem("doctors");
  if (storedDoctorStr) {
    return JSON.parse(storedDoctorStr);
  } else {
    return [];
  }
};
const addToStoredLS = (id) => {
  const storedDoctorData = getStoredDoctor();
  if (storedDoctorData.includes(id)) {
    toast.error("Already Booked this Appointment!");
  } else {
    storedDoctorData.push(id);
    const data = JSON.stringify(storedDoctorData);
    localStorage.setItem("doctors", data);
    toast.success("You Booked Successfully this Appointment!");
  }
};
export { addToStoredLS, getStoredDoctor };
