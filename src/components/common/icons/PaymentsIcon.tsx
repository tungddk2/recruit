import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon from "@ant-design/icons";

const PaymentsSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 96 960 960" width="1rem">
		<path d="M540 636q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220 776q-24.75 0-42.375-17.625T160 716V316q0-24.75 17.625-42.375T220 256h640q24.75 0 42.375 17.625T920 316v400q0 24.75-17.625 42.375T860 776H220Zm100-60h440q0-42 29-71t71-29V416q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm480 180H100q-24.75 0-42.375-17.625T40 836V376h60v460h700v60ZM220 716V316v400Z"/>
	</svg>
);

export const PaymentsIcon = (props: Partial<CustomIconComponentProps>) => (
	<Icon component={PaymentsSVG} {...props} />
)