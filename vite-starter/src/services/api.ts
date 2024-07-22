import axios from "axios";

export const APIClient = (() => {
  const getAuthToken = async () => {
    // TODO: token should be stored inside localstorage
    // const token = localStorage.getItem("token")

    // - TEST ENV
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiZDUzZDg0NjgtOWI1OC00YzZjLWIyNDUtMzVjY2RiODhhNDA2Iiwic2lkIjoiYjJiYTYwYTEtYjEyOC00ZjQ0LTkwYjktMDBmNjlmZTVlYTI5IiwiYWNjb3VudFNpZCI6ImNlZWEyM2MxLWI4NGEtNDVmNS1iYjM3LTkwNjQ5N2U2ODUwNyIsInBsYW5JZCI6NywicGVybWlzc2lvbiI6eyIxIjoxNjM4MiwiMiI6NDkxNTIsIjMiOjEwMjQwLCI1IjoyMTQ3NDgzNjQsIjYiOjEyMH0sImlhdCI6MTcxODM3OTEzMSwiZXhwIjoxNzM1NjU5MTMxfQ.Q3RXg6Vk0GFtfJ9ih5WToUvTnUl4nKfE3Lyfydo365Y";

    // - DEV ENV
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiYTliYWFkY2MtZTMwNy00MTkyLWExMmItYWM3OWI4NDdmMzNiIiwic2lkIjoiMWZiNDdmYWQtNGIzMy00MTU0LTgyMzMtYTYyNGEyNDE0N2VmIiwiYWNjb3VudFNpZCI6IjQ4NGYwMWY5LTU4MzktNDcwOS04YzkzLTYyZmI3Mjc3ZDI5MiIsInBsYW5JZCI6NywicGVybWlzc2lvbiI6eyIxIjoyMDk3MTUxLCIyIjoxMjcsIjMiOjUsIjUiOjMxLCI2IjozfSwiaWF0IjoxNzE3NTcyMDkzLCJleHAiOjE3MjUzNDgwOTN9.XR2_rt51yXDH-5oLsfZCtFc6fVKnyouYIg7xFURJR2o";
    try {
      return `Bearer ${token}`;
    } catch (err) {
      console.log("getAuthToken", err);
    }
  };

  const instance = axios.create();

  instance.interceptors.request.use(async (config) => {
    config.baseURL = import.meta.env.VITE_API_SERVER_URL;
    config.headers.Authorization = await getAuthToken();
    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if ([401, 403].includes(error.response?.status)) {
        // sign out user if any 401 error appears
        // signOut(getAuth());
      } else {
        return Promise.reject(error);
      }
    }
  );

  return instance;
})();
