
function Navbar() {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex items-center justify-between">
				<span className="text-green-400 text-xl font-bold">FIGURE 8</span>
				<ul className="flex space-x-4">
					<li><a href="#" className="text-white hover:text-green-400">Home</a></li>
					<li><a href="#" className="text-white hover:text-green-400">About</a></li>
					<li><a href="#" className="text-white hover:text-green-400">Services</a></li>
                    <li><a href="#" className="text-white hover:text-green-400">Contact</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
