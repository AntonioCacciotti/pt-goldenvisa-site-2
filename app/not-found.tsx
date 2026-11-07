import Link from "next/link";
import PageHead from "@/components/PageHead";
export default function NotFound() {
  return (<><PageHead title="This page could not be found." /><p className="mx-auto max-w-4xl px-5"><Link href="/" className="text-link">Back to home</Link></p></>);
}
