import URL from './urls';

const getProfile = async () => {
  let result = null;
  try {
    result = await fetch(URL.user)
      .then((response) => response.json())
      .then((data) => data);
  } catch (e) {
    console.log(e);
  }

  return result;
};

export { getProfile };
