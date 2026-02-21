interface AuthSwitchLinkTypes {
  text: string;
  textLink: string;
  link: string;
}

export default function AuthSwitchLink({
  text,
  textLink,
  link,
}: AuthSwitchLinkTypes) {
  return (
    <div className="flex items-center justify-center gap-x-2 text-sm text-center mt-6 cursor-pointer">
      <p className="text-black-100">{text}</p>
      <a href={link} className="text-primary-100 font-semibold">
        {textLink}
      </a>
    </div>
  );
}
