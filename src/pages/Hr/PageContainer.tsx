export default function PageContainer(props: any) {
	return (
		<div style={{
			width: "100%",
			height: "fit-content",
			borderRadius: "8px",
			backgroundColor: "#fff",
		}}>
			{props.children}
		</div>
	)
}