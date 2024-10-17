import Link from 'next/link';
import PageTitle from '@/app/page_title'

export default function Home() {
  return (
    <div>
      <PageTitle text="Sit down and eat at the Bean Cafe!"/>
      <p className="prompt-text">
        Click Here for
        <Link href="/appetizers" className="link"> appetizers</Link>
      </p>
      <p className="prompt-text">
        Click Here for
        <Link href="/entrees" className="link"> entrees</Link>
      </p>
    </div>
  );
}
