import React from 'react'

import logo from "../static/svg/zygonheaderlogo.svg";
import siliconlogo from "../static/img/SiliconTech.png";
export default function Header() {
	return (<>
		<div className="homepage_header">
			<div className="row">
				<div className="col col-1" style={{
					alignItems: "center",
					marginLeft: "10px",

				}}>
					<img className="logo" src={logo} alt="logo" />
				</div>
				<div className="col col-2" style={
					{
						alignItems: "center",
						display: "flex",
						justifyContent: "center",
					}
				}>
					<img className="logo" src={siliconlogo} alt="logo" />
				</div>
			</div>
		</div>
	</>)
}
