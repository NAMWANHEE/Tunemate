import { login } from "@/api/user";
import useIndividualPlayListsQuery from "@/hooks/queries/music/individual/useIndividualPlayListsQuery";
import { storage } from "@/utils/storage";
import Link from "next/link";
import { useEffect } from "react";
import styles from "@/styles/LoginPage.module.css";

const LoginPage = () => {
  if (typeof window !== "undefined") {
    storage.setAccessToken(
      "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjYjg5OWJjOC0zM2E5LTQzYTYtOTM4Yy03NmIwZWMyODZjNzciLCJleHAiOjE2OTkyMzkyMDMsImlzcyI6IlR1bmVtYXRlIn0.Nbg0Dk3sKzT1wlYGK4p8CWrKELWE2OzpWINK6Jnq11GXiQ8CK8FUXFHYxnX1WL43"
    );
    storage.setSpotifyAccessToken(
      "BQApjd73W4U0n9IwwtLEqykwBX4zvNZ28tqR38XZevfCARPU5KiIX_4YTDDPxjQoAoXQFofuNryXFQJx8KBSVZTSo2HjWkzzOYUfVMFTUr7Md3tT2TanrECiyPPbM2js3BrtEB92Goi553qrgiiWQlkpaL0x-FWGtAXmFq550inqlRp891XRNXobQF16t2NT47WSer-rehlUfyRBc0OFgE3fjIl-HxCzcXO2o4-BdTLbaj5QWlsNAoifZ5YqmurQ2oL5PGl4DAmkZHtdaCHhqev9sP51vYe3EPa9yPsjSBg"
    );
  }
  const { data: playlists } = useIndividualPlayListsQuery(
    "31rth557pkev4u7nlnutnannrewq"
  );
  console.log(playlists);

  const onLogin = () => {
    login().then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {}, []);
  return (
    <div className={styles["login-page"]}>
      <p className={styles["login-page__title"]}>Tunemate</p>
      <button className={styles["login-page__button"]} onClick={onLogin}>
        login
      </button>
      <br />
      <a href="http://k9a603.p.ssafy.io:8000/api/v1/user-service/oauth2/authorization/spotify">
        login
      </a>
      <br />
      <Link href={"/main"}>메인 페이지 이동</Link>
    </div>
  );
};

export default LoginPage;
