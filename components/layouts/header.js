import Link from "next/link";
import { Button, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <header>
      <Typography>This is a Logo</Typography>
      <nav>
        <ul>
          <li>
            <Link href="/about" passHref>
              <Button>About</Button>
            </Link>
          </li>
          <li>
            <Link href="contact" passHref>
              <Button>Contact</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
