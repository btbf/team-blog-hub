import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このページは、SPOのブログを集約したサイトです。
            </p>
            <p>
              カルダノエコシステムも日を追うごとに猛スピードで進化していく中で、毎日新しい情報が膨大に出てきており、SPOの皆さんやホルダーの皆さんも情報に追いつくのに必死で、限られた時間の中で情報収集するのは大変になって来てることと思います。
            </p>
            <p>
              そしてカルダノコミュニティの拡大、さらなる価値向上のためにもコミュニティ全体で一丸となって有益な情報を分散して発信していく必要があると考えております。
            </p>
            <p>
              SPOの皆さんが得意分野を生かしてブログで情報発信して頂いてる内容は日本コミュニティにとって財産であり、貴重な情報が埋もれてしまってはもったいないためこのようなサイトを構築しました。
            </p>
            <p
              今後、SPOの方以外の情報発信者も掲載できるよう準備を進めてまいります
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
