import { metadata } from "@/app/constants/metadata";
import SocialButtons from "../SocialButtons";
import QuickLinks from "./components/QuickLinks";
export default function Footer() {
	const {title, footer: {subtitle, allRights }, contact} = metadata;
	const titleArray = title.split(' ');
	const year = new Date().getFullYear();

	return (
		<footer className="bg-charcoal border-t border-white/10 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="grid md:grid-cols-4 gap-8 mb-8 flex flex-col items-center text-center md:items-start md:text-left">
					{/* Brand */}
					<div className="md:col-span-2">
						<h3 className="text-2xl font-playfair font-bold text-white mb-4">
							<span className="text-gold">{titleArray[0]}</span> {titleArray[1]}
						</h3>
						<p className="text-gray-300 mb-6 max-w-xl">
							{subtitle}
						</p>
						<div className="space-x-4 flex flex-row justify-center md:justify-start">
							<SocialButtons />
						</div>
					</div>
				
					<div>
						<QuickLinks />
					</div>
					
					<div>
						<h4 className="font-semibold text-white mb-4">Contact</h4>
						<ul className="space-y-3 text-gray-300 text-sm flex flex-col items-center text-center md:items-start md:text-left">
							<li className="flex items-center">
								<i className="fas fa-phone text-gold mr-2 w-4"></i>
								<a 
									href="tel:0754824625" 
									className="hover:text-gold transition-colors duration-200">
									{contact.phone}
								</a>
							</li>
							<li className="flex items-center">
								<i className="fas fa-envelope text-gold mr-2 w-4"></i>
								<a 
									href="mailto:info@dragcatering.ro" 
									className="hover:text-gold transition-colors duration-200">
									{contact.email}
								</a>
							</li>
							<li className="flex items-start">
								<i className="fas fa-map-marker-alt text-gold mr-2 w-4 mt-1"></i>
								<span>{contact.address.street}<br />{contact.address.city} {contact.address.zipCode}, {contact.address.country}</span>
							</li>
							<li className="flex items-start">
								<i className="fas fa-clock text-gold mr-2 w-4 mt-1"></i>
								<div>
									{contact.businessHours.map(hours => (<div key={hours}>{hours}</div>))}
								</div>
							</li>
						</ul>
					</div>
				</div>
				
				<div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
					<p>&copy;{year} Drag Catering. {allRights} 
						{/* | <a href="#" className="hover:text-gold/80 transition-colors duration-200">{privacyPolicy}</a> | <a href="#" className="hover:text-gold/80 transition-colors duration-200">{termsAndServices}</a> */}
						</p>
				</div>
			</div>
		</footer>
	);
}