import { useEffect } from "react";
import Search from "@/components/global/search";
import Layout from "@/components/layout/layout";
import Link from "@/components/link";
import { useRouter } from "next/router";
import { setCookie } from "@/services/cookies";
import { useUser } from "@/hooks/useUser";
import toastr from "toastr";

export default function Home() {
  const { setLoading } = useUser();
  const router = useRouter();
  const { token, user, message } = router.query;

  if (token) {
    setLoading(true);
    const user_data = {
      accessToken: token,
      expiresIn: 36000,
      status: 200,
      user: JSON.parse(user),
    };

    setCookie(user_data);
    localStorage.setItem("user-data", JSON.stringify(user_data));
    router.push("/");
    setTimeout(() => {
      setLoading(false);
      return toastr.success("Login Successful");
    }, 100);
  }

  if (message) {
    toastr.error(message);
    router.push("/");
  }

  return (
    <Layout>
      <div className='w-full flex flex-col lg:flex-row justify-between mt-14 lg:my-0'>
        <h4 className='font-unna font-40 text-gray p-5 '>
          What would you like to <br /> do today?
        </h4>
        <Search />
      </div>

      <div className='w-full p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* grid */}
          <Link to='/listings' className='quick-listings'>
            <div className='circle'>
              <span></span>
            </div>
            <img src={"./images/image1.png"} alt='*' />
            <span className='font-unna--bold'> Shor-term Stay</span>
          </Link>
          <Link to='/listings' className='quick-listings'>
            <div className='circle'>
              <span></span>
            </div>
            <img src={"./images/image2.png"} alt='*' />
            <span className='font-unna--bold'> Rent</span>
          </Link>
          <Link to='/listings' className='quick-listings'>
            <div className='circle'>
              <span></span>
            </div>
            <img src={"./images/image3.png"} alt='*' />
            <span className='font-unna--bold'> List your home</span>
          </Link>

          {/* grid */}
        </div>
      </div>
    </Layout>
  );
}
