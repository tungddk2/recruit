import {createContext, useState} from "react";
import {Role} from "../constants/roles";
import {message} from "antd";
import LogIn from "../components/LogIn/LogIn";
import {useNavigate} from "react-router";

interface AuthContextType {
	user: {
		email: string;
		role: Role;
	}
	login: (username: string, password: string) => Promise<boolean>;
	logout: () => void;
	openLoginModal: (state: boolean) => void;
}


export const AuthContext = createContext<AuthContextType>({
	user: { email: "", role: "guest" } as User,
	login: async () => false,
	logout: () => {},
	openLoginModal: (state: boolean) => {},
});
export type User = {
	email: string;
	role: Role;
}

export default function AuthProvider(props: any) {
	const [user, setUser] = useState<User>({
		email: "",
		role: "guest",
	});
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();

	const login = async (email: string, password: string) => {
		if (email === "candidate@gmail.com" && password === "123456") {
			setUser({ email: email, role: "user" });
			navigate("/");
			return true;
		} else if (email === "hr@gmail.com" && password === "123456") {
			setUser({ email: email, role: "hr" });
			navigate("/hr");
			return true;
		} else if (email === "company@gmail.com" && password === "123456") {
			setUser({email: email, role: "company"});
			navigate("/company");
			return true;
		}
		return false;
	}

	const logout = () => {
		setUser({ email: "", role: "guest" });
	}

	const openLoginModal = (state: boolean) => {
		setVisible(state)
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, openLoginModal }}>
			<LogIn visible={visible} setVisible={setVisible} />
			{props.children}
		</AuthContext.Provider>
	);
}