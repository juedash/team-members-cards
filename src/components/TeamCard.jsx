// src/components/TeamCard.jsx
import { FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";

const linkMeta = (href = "") => {
  const lower = href.toLowerCase();

  if (lower.startsWith("mailto:")) {
    return {
      action: "Send email",
      label: "Email",
      Icon: FaEnvelope,
      type: "email",
    };
  }

  if (lower.includes("linkedin")) {
    return {
      action: "View LinkedIn",
      label: "LinkedIn",
      Icon: FaLinkedin,
      type: "external",
    };
  }

  return {
    action: "Visit website",
    label: "Website",
    Icon: FaGlobe,
    type: "external",
  };
};

const isExternal = (href = "") => /^https?:\/\//i.test(href);

const TeamCard = ({ member }) => {
  const { action, Icon, type } = linkMeta(member.link);
  const external = isExternal(member.link);

  const isMail = type === "email";
  const email = isMail ? member.link.replace(/^mailto:/i, "") : null;

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden h-full transition-shadow duration-200 hover:shadow-md">
      <div className="relative bg-gray-100 overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[5/6] object-cover object-top"
          loading="lazy"
        />

        <div className="hidden sm:block absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/35 transition-colors duration-200" />

        <div className="hidden sm:flex absolute inset-0 items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={member.link}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/90 text-slate-900 hover:bg-indigo-50/90 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={`${member.name} - ${action}`}
            title={action}
          >
            <Icon className="text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          {member.role}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 leading-tight mt-1">
          {member.name}
        </h3>

        <div className="sm:hidden mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <span
            className="text-sm text-slate-600 truncate"
            title={isMail ? email : action}
          >
            {isMail ? email : action}
          </span>

          <a
            href={member.link}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg  text-slate-900 bg-indigo-50/90 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            title={action}
          >
            <Icon className="text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default TeamCard;
