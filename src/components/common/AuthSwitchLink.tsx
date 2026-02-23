import { Link } from "react-router-dom";

interface AuthSwitchLinkTypes {
  prompt: string;
  textLink: string;
  linkTo: string;
}

export default function AuthSwitchLink({
  prompt,
  textLink,
  linkTo,
}: AuthSwitchLinkTypes) {
  return (
    <div className="flex items-center justify-center gap-x-2 text-sm text-center mt-6 cursor-pointer">
      <p className="text-black-100">{prompt}</p>
      <Link
        to={linkTo}
        className="text-primary-100 font-semibold hover:underline transition-all"
      >
        {textLink}
      </Link>
    </div>
  );
}
