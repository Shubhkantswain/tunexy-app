import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white max-w-[90rem] mx-auto mt-[70px]">
      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 text-xs">
        {/* Footer Sections */}
        {[
          {
            title: 'Company',
            items: ['About', 'Jobs', 'For the Record'],
          },
          {
            title: 'Communities',
            items: ['For Artists', 'Developers', 'Advertising', 'Investors', 'Vendors'],
          },
          {
            title: 'Useful links',
            items: ['Support', 'Free Mobile App'],
          },
          {
            title: 'Spotify Plans',
            items: [
              'Premium Individual',
              'Premium Duo',
              <span key="Premium Family" className="underline underline-offset-2">
                Premium Family
              </span>,
              'Premium Student',
              'Spotify Free',
            ],
          },
        ].map(({ title, items }) => (
          <div key={title}>
            <h3 className="font-bold mb-3">{title}</h3>
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Icons */}
        <div className="flex items-start gap-4 md:justify-end">
          {[Instagram, Twitter, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
            >
              <Icon size={16} className="text-white" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer