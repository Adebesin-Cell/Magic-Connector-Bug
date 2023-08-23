import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push({
      pathname: '/',
      query: {
        category: '?nfts'
      }
    });

    if (typeof window !== "undefined") {
      window.location.reload()
    }
  };

  return (
    <div className='h-screen flex justify-center items-center text-white'>
      <button type="button" onClick={handleButtonClick}>Hi, Click Me</button>
    </div>
  );
}
