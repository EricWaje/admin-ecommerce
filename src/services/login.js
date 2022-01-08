import axios from 'axios';

const baseUrl = 'https://hidden-beach-96657.herokuapp.com/api/login';

const login = async (credentials) => {
    const { data } = await axios.post(baseUrl, credentials);
    return data;
};

export default { login };
