import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
	const { authed } = UserAuth();
	var navigate = useNavigate();

	return authed === true ? children : navigate('/');
};

export default ProtectedRoute;
