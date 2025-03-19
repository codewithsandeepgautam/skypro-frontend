import React from 'react'
import { Link } from "react-router-dom";
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import LazyLoad from 'react-lazyload';

const PrivacyPolicyKr = () => {
  const email = "support@skyprotv.in";
  const mailtoLink = `mailto:${email}`;

  const openMail = () => {
    window.open(mailtoLink);
  };
  return (
    <>
      <SEO
        title="Privacy policy Kr | Skypro IPTV"
        noIndex
      />
      <InnerPageBanner title='개인정보 보호정책' handle='집' innerPageBanner={ImageIcons.privacyPolicy} />
      <section className='relative overflow-hidden'>
        <LazyLoad>
        <img src={ImageIcons.patten} alt='Patten' className="absolute -translate-y-2/4 top-2/4 left-0 w-[60px]" />
        <img src={ImageIcons.patten} alt='Patten' className="absolute top-[50%] right-0 rotate-[180deg] w-[60px]" />
        </LazyLoad>
        <div className="container">
          <p>정책 최종 업데이트: <span className="text-[#fd5901]">
          2023년 11월
          </span>
          </p>
          <p>
          우리에게는 귀하의 개인 정보 보호가 최우선 사항이며 이를 처리하기를 열망합니다.
            귀하의 개인정보를 책임감 있게 처리하여
            당신의 경험. 당사가 수집하는 귀하의 정보
            당신이 우리 웹사이트를 방문하는 동안{" "}
            <Link className='linkColor' to={mailtoLink} onClick={openMail}>
            support@skyprotv.in
            </Link>
            &nbsp; 더 나은 사용자를 위해 양심적으로 활용됩니다
            경험. 모든 엄격한 조치는 우리가 유지하고 있습니다
            귀하의 데이터를 보호하기 위해 SkyPro에서
            불법적인 접근의. 당신이 어떤 것에 취약한 경우
            우리 서비스에 대해 문의하려면 다음 주소로 언제든지 문의하세요.{" "}
            <Link className='linkColor' to={mailtoLink} onClick={openMail}>
            support@skyprotv.in
            </Link>
            . 우리는 모든 측면에서 투명성을 제공한다고 믿습니다.
          </p>
          {privacyData.map((data, index) => (
            <>
              <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>{data.heading}</h2>
              <ul className="mt-[10px]" key={index}>
                <li>
                  <strong className=' mb-[2px] text-[#071e43] inline-block'>{data.contentFirst}</strong>
                  <br />
                  <span className='mb-[10px] inline-block'>{data.paraFirst}</span>
                </li>
                <li>
                  <strong className='mb-[2px] text-[#071e43] inline-block'>{data.contentSecond}</strong>
                  <br />
                  <span>{data.paraSecond}</span>
                </li>
              </ul>
            </>
          ))}

          {privacySubdata.map((data, index) => (
            <>
              <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>{data.heading}</h2>
              <p key={index}>
                {data.para + " "}
                {data.url && (
                  <Link to={mailtoLink} onClick={openMail}>
                    info@skypro.co.in
                  </Link>
                )}
              </p>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

const privacyData = [
  {
    heading: "당사가 수집하는 정보",
    contentFirst: "개인정보:",
    paraFirst:
      "귀하가 당사 웹사이트를 방문하는 동안 귀하의 이름, 주소, 연락처 정보 등과 같은 특정 개인 정보가 당사에 의해 수집됩니다. 당사가 수집하는 정보는 일반적으로 특정 양식을 통해 귀하에 의해 제공됩니다. 당사는 불법적인 접근, 정보 공개 및 개인 데이터 변경으로부터 데이터를 보호하기 위해 엄격한 조치를 취함으로써 귀하의 정보에 대한 완전한 기밀성과 보안을 보장합니다.",
    contentSecond: "사용 정보:",
    paraSecond:
      "더 나은 사용자 경험을 제공하기 위해 당사는 귀하가 방문한 다양한 페이지에 대한 데이터와 각 페이지에서 보낸 시간을 수집합니다. 이 외에도 다른 분석 데이터도 수집됩니다. 이는 당사 웹사이트와 콘텐츠의 기능을 개선하여 귀하의 요구 사항을 충족시키는 데 도움이 됩니다.",
  },

  {
    heading: "당사가 귀하의 정보를 사용하는 방법",
    contentFirst: "서비스 제공:",
    paraFirst:
      "당사가 축적한 정보는 서비스 제공을 개선하는 데 중요한 역할을 합니다. 이는 당사의 서비스가 귀하의 요구 사항을 충족하는지 확인하는 데 도움이 되는 서비스를 향상하고 개인화하기 위해 사용됩니다. SkyPro의 전문가 팀은 고객의 문의에 빠른 응답을 제공하고 모든 우려를 충족시킬 수 있다고 믿습니다.",
    contentSecond: "의사소통:",
    paraSecond:
      "당사의 서비스, 뉴스레터 및 판촉 자료에 대한 최신 정보를 제공하기 위해 당사는 귀하의 연락처 정보를 활용하고 있습니다. 당사는 귀하가 언제든지 프로모션 발송물을 받을 수 있는 유연성을 제공하기 위해 최선을 다하고 있으며 이를 통해 귀하는 귀하가 받은 정보를 관리할 수 있습니다.",
  },
];

const privacySubdata = [
    {
      heading: "보안",
      para: "세부 사항은 필요한 보안 조치를 통해 완전히 보호됩니다. 쿠키도 사용되며 이는 브라우저 설정에서 관리할 수 있습니다.",
    },
    {
      heading: "당신의 선택",
      para: "귀하의 세부 정보는 언제든지 검토하고 취소할 수 있습니다. 도움이 필요하시면 아래로 문의 주세요:",
      url: "info@skypro.co.in",
    },
    {
      heading: "이 개인정보 처리방침 변경 사항",
      para: "우리는 주기적으로 이 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항은 업데이트된 날짜와 함께 게시됩니다.",
    },
    {
      heading: "정책 변경 사항",
      para: "개인정보 처리방침은 변경될 수 있으며, 변경 사항은 여기에 게시됩니다.",
    },
  ];
  
export default PrivacyPolicyKr