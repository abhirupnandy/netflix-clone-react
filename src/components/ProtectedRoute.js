import { useNavigate, Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
	const { user } = UserAuth();
	const navigate = useNavigate();

	// check if user is logged in
	if (user?.email) {
		return children;
	}
	// if not logged in, redirect to login page
	else {
		navigate('/login');
		return <Navigate to='/login' />;
	}
};

export default ProtectedRoute;
