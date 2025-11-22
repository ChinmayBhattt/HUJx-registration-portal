import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-xl mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-white/30">
                    <p>© 2025 HUJx Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                        <Link href="#" className="hover:text-white transition-colors">Discord</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
