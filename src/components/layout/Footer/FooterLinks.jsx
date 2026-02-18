const FooterLinks = () => {
  return (
    <div>
      <h4 className="text-white font-semibold text-lg mb-6">
        Quick Links
      </h4>

      <ul className="space-y-4">
        <li className="hover:text-purple-500 transition cursor-pointer" id="#Home" >Home</li>
        <li className="hover:text-purple-500 transition cursor-pointer">Services</li>
        <li className="hover:text-purple-500 transition cursor-pointer">Our Work</li>
        <li className="hover:text-purple-500 transition cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default FooterLinks;
