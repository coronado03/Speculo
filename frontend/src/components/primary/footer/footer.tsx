export default Footer;

function Footer()
{
	return(
		<>
			<div className="absolute bottom-0 w-screen rounded-t-[48px] px-16 py-6 bg-[#232321] text-slate-50">
				<div className="flex flex-row text-2xl">
					<div className="w-1/3 flex flex-col gap-[16px]">
						<div className="text-[28px] text-[#4A69E2] font-semibold">
							About Us
						</div>
						<div>
							<ul>
								<li>We are a cool company</li>
								<li>We are a cool company</li>
								<li>We are a cool company</li>
							</ul>
						</div>
					</div>
					<div className="w-1/3 flex flex-col gap-[16px]">
						<div className="text-[28px] text-[#4A69E2] font-semibold">
							Contacts
						</div>
						<ul>
							<li>+48 696 696 696</li>
							<li>abbosjon99@gmail.com</li>
						</ul>
					</div>
					<div className="w-1/3 flex flex-col gap-[16px]">
						<div className="text-[28px] text-[#4A69E2] font-semibold">
							Follow Us
						</div>
						<ul className="flex flex-row gap-2">
							<li className="">I</li>
							<li className="">T</li>
							<li className="">F</li>
							<li className="">T</li>
						</ul>
					</div>
				</div>
				<div className="text-center text-base">
					<p>Copyright 2024. All rights reserved.</p>
				</div>
			</div>
		</>
	)
}
