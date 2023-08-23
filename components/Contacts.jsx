import ContactsForm from "./ContactsForm";

const Contacts = () => {
  return (
    <footer className="contacts" id="contacts">
      <div className="section_gradient_1"></div>
      <div className="section_gradient_2"></div>
      <div className="container md:mx-auto flex flex-col z-20 relative">
        <h2 className="sm:text-xl md:text-[67px] lg:text-[98px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase font-thin mb-[36px] lg:mb-[71px]">
          Contact
          <span className="font-medium"> us</span>
        </h2>
        <div className="lg:flex lg:gap-[231px]">
          <address className="sm:mb-[12px] md:mb-[64px] lg:mb-0 flex sm:flex-col lg:flex-col sm:gap-[24px] md:gap-[90px] lg:gap-[124px]">
            <div className="grid sm:grid-cols-[1fr_81px] md:grid-cols-[221px_81px] lg:grid-cols-[1fr_81px] gap-x-[20px] items-center">
              <div className="justify-self-end">
                <a href="tel:+380981234567" className="address_bold">
                  +38 (098) 12 34 567
                </a>
              </div>
              <div>
                <p className="address_thin">Phone number</p>
              </div>
              <div className="justify-self-end">
                <a href="tel:+380731234567" className="address_bold">
                  +38 (073) 12 34 567
                </a>
              </div>
              <div></div>
              <div className="justify-self-end mt-[24px] lg:mt-[64px]">
                <a href="mailto:support@carptravel.com" className="address_bold">
                  support@carptravel.com
                </a>
              </div>
              <div className="mt-[24px] lg:mt-[64px]">
                <p className="address_thin">E-mail</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-[1fr_81px] md:grid-cols-[52px_1fr] lg:grid-cols-[1fr_81px] gap-x-[20px] items-center">
              <div className="justify-self-end lg:hidden">
                <p className="address_thin">Follow us</p>
              </div>
              <div className="lg:justify-self-end">
                <a href="https://www.facebook.com/" className="address_bold">
                  facebook
                </a>
              </div>
              <div className="justify-self-end lg:justify-self-start hidden lg:block">
                <p className="address_thin">Follow us</p>
              </div>
              <div className="row-span-3 lg:hidden"></div>
              <div className="lg:justify-self-end">
                <a href="https://www.instagram.com/" className="address_bold">
                  instagram
                </a>
              </div>
              <div className="row-span-3 hidden lg:block"></div>
              <div className="lg:justify-self-end">
                <a href="https://www.youtube.com/?gl=UA&hl=uk" className="address_bold">
                  youtube
                </a>
              </div>
              <div className="lg:justify-self-end">
                <a href="https://www.tiktok.com/uk-UA/" className="address_bold">
                  tiktok
                </a>
              </div>
            </div>
          </address>
          <ContactsForm />
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
