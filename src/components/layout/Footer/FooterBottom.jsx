const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} SIRA Digital. All rights reserved.</p>

      <p className="mt-4 md:mt-0">
         Designed & Developed by SIRA Digital.
      </p>
    </div>
  );
};

export default FooterBottom;
