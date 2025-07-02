import { footer } from "@/app/metadata/footer";
import SocialButtons from "./components/SocialButtons";
import QuickLinks from "./components/QuickLinks";
export default function Footer() {
	const title = footer.title.split(' ')

	return (
		<footer className="bg-charcoal border-t border-white/10 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					{/* Brand */}
					<div className="md:col-span-2">
						<h3 className="text-2xl font-playfair font-bold text-white mb-4">
							<span className="text-gold">{title[0]}</span> {title[1]}
						</h3>
						<p className="text-gray-300 mb-6 max-w-md">
							{footer.subtitle}
						</p>
						<div className="flex space-x-4">
							<SocialButtons />
						</div>
					</div>
				
					{/* Quick Links */}
					<div>
						<QuickLinks />
					</div>
					
					{/* Contact Info */}
					<div>
						<h4 className="font-semibold text-white mb-4">Contact</h4>
						<ul className="space-y-3 text-gray-300 text-sm">
						<li className="flex items-center">
							<i className="fas fa-phone text-gold mr-2 w-4"></i>
							<a 
							href="tel:0754824625" 
							className="hover:text-gold transition-colors duration-200"
							>
							0754 824 625
							</a>
						</li>
						<li className="flex items-center">
							<i className="fas fa-envelope text-gold mr-2 w-4"></i>
							<a 
							href="mailto:info@dragcatering.ro" 
							className="hover:text-gold transition-colors duration-200"
							>
							info@dragcatering.ro
							</a>
						</li>
						<li className="flex items-start">
							<i className="fas fa-map-marker-alt text-gold mr-2 w-4 mt-1"></i>
							<span>Bulevardul Poitiers 12<br />Iași 700671, România</span>
						</li>
						<li className="flex items-start">
							<i className="fas fa-clock text-gold mr-2 w-4 mt-1"></i>
							<div>
							<div>L-J: 10:00 - 22:00</div>
							<div>V-D: 10:00 - 00:00</div>
							</div>
						</li>
						</ul>
					</div>
				</div>
				
				<div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
				<p>&copy; 2023 Drag Catering. All rights reserved. | <a href="#" className="hover:text-gold transition-colors duration-200">Privacy Policy</a> | <a href="#" className="hover:text-gold transition-colors duration-200">Terms of Service</a></p>
				</div>
			</div>
		</footer>
	);
}