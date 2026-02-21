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
      <a href={linkTo} className="text-primary-100 font-semibold">
        {textLink}
      </a>
    </div>
  );
}
