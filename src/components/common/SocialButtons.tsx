import Button from "./Button";

export default function SocialButtons() {
  return (
    <div className="flex gap-x-6">
      <Button type="social">
        <img src="images/socials/google.png" alt="google" />
        <span>Google</span>
      </Button>

      <Button type="social">
        <img src="images/socials/facebook.png" alt="facebook" />
        <span>Facebook</span>
      </Button>
    </div>
  );
}
