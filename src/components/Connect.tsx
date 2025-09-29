import React from 'react';

interface SocialLinkProps {
  href: string;
  iconClass: string;
  className: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  iconClass,
  className,
}) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i
          className={`fa ${iconClass} fa-3x connect-icon hover:animate-wiggle  ${className}`}
        />
      </a>
    </li>
  );
};

const Connect: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://github.com/louiebert',
      iconClass: 'fa-github',
      className: 'github',
    },
    {
      href: 'https://twitter.com/louiebrt',
      iconClass: 'fa-twitter',
      className: 'twitter',
    },
    {
      href: 'http://stackoverflow.com/users/2129271/louie-bertoncin',
      iconClass: 'fa-stack-overflow',
      className: 'stack-overflow',
    },
    {
      href: 'https://www.linkedin.com/pub/louie-bertoncin/8b/60a/43b',
      iconClass: 'fa-linkedin',
      className: 'linkedin',
    },
    {
      href: 'http://www.facebook.com/louie.bertoncin',
      iconClass: 'fa-facebook',
      className: 'facebook',
    },
  ];

  return (
    <>
      <div className="anchor" id="connect"></div>
      <section className="section_title connect">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <h1>Connections to the Outside World</h1>
          </div>

          <div className="flex flex-wrap connect-sub">
            <div className="w-8/12 mx-auto">
              <h5>Feel free to creep on me on whatever source pleases you.</h5>
            </div>
          </div>

          <hr />
          {/* Social Profiles Links */}
          <div className="sm:w-8/12 sm:mx-auto">
            <ul className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  iconClass={link.iconClass}
                  className={link.className}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export { Connect };
