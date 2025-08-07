import NoImage from "../assets/sponsors/no-image.png";
import GoogleLogo from "../assets/sponsors/0_S001.png";
import GMOFSLogo from "../assets/sponsors/1_S101.png";
import EVERYLogo from "../assets/sponsors/2_S102.png";
import ResilireLogo from "../assets/sponsors/3_S201.png";
import OPTiMLogo from "../assets/sponsors/4_S202.png";
import LayerXLogo from "../assets/sponsors/5_S309.png";
import UbieLogo from "../assets/sponsors/6_S314.jpg";
import FindyLogo from "../assets/sponsors/7_S303.png";
import UNextLogo from "../assets/sponsors/9_S312.png";
import SakuraLogo from "../assets/sponsors/11_S311.png";
import TokyuLogo from "../assets/sponsors/12_S305.png";
import KnoledgeWorkLogo from "../assets/sponsors/14_S308.png";
import SODALogo from "../assets/sponsors/15_S307.png";
import TopotalLogo from "../assets/sponsors/17_S310.png";
import TechTouchLogo from "../assets/sponsors/19_S304.png";
import HatenaLogo from "../assets/sponsors/20_S306.png";
import IssueHuntLogo from "../assets/sponsors/22_S313.png";

const venueSponsorImageSize = {
  height: 242,
  width: 448,
};

const specialSponsorImageSize = {
  height: 242,
  width: 448,
};

const platinumGoldSponsorImageSize = {
  height: 242,
  width: 448,
};

const goldSponsorImageSize = {
  height: 242,
  width: 448,
};

const silverSponsorImageSize = {
  height: 163,
  width: 290,
};

const bronzeSponsorImageSize = {
  height: 92,
  width: 164,
};

const gopherSponsorImageSize = {
  height: 92,
  width: 164,
};

const toolSponsorImageSize = {
  height: 163,
  width: 290,
};

/**
 * ページ全体で使用する定数
 */
export const constants = {
  pageTitle: "Go Conference 2025",
  pageDescription:
    "Go Conference is a conference for Go programming language users.",
  sponsorship: {
    start: new Date(Date.UTC(2025, 4, 31, 15, 0, 0)), // 2025/06/01 00:00:00 JST
    end: new Date(Date.UTC(2025, 7, 31, 14, 59, 59)), // 2025/08/31 23:59:59 JST
  },
  proposal: {
    start: new Date(Date.UTC(2025, 4, 13, 3, 0, 0)), // 2025/05/13 12:00:00 JST
    end: new Date(Date.UTC(2025, 5, 18, 14, 59, 59)), // 2025/06/18 23:59:59 JST
  },
  workshop: {
    start: new Date(Date.UTC(2025, 4, 31, 15, 0, 0)), // 2025/06/01 00:00:00 JST
    end: new Date(Date.UTC(2025, 5, 30, 14, 59, 59)), // 2024/06/30 23:59:59 JST
  },
  sponsors: {
    venueSponsor: {
      // 会場スポンサー
      name: "株式会社サイバーエージェント",
      imageSrc: NoImage,
      height: venueSponsorImageSize.height,
      width: venueSponsorImageSize.width,
      dialog: {
        openId: "0_V001",
        imageSrc: NoImage,
        link: "https://www.cyberagent.co.jp/",
        description:
          "メディア事業、広告事業、ゲーム事業と多様な事業を展開するサイバーエージェントでは、新しい未来のテレビ「ABEMA」や、事前に広告配信効果を予測する「効果予測AI」を活用して広告クリエイティブを制作する「極予測AI」、プロレス動画配信サービス「WRESTLE UNIVERSE」などドメインの異なる様々なプロダクトでGoを採用しています。 なお、サイバーエージェントのGoにおけるNext Expertsである渋谷拓真 (@sivchari) が、当カンファレンスのオーガナイザーを務めます。",
      },
      jobBoard: {
        imageSrc: NoImage,
        description: undefined,
      },
    },
    specialSponsor: {
      // 特別スポンサー
      name: "Google LLC",
      imageSrc: GoogleLogo,
      height: specialSponsorImageSize.height,
      width: specialSponsorImageSize.width,
      dialog: {
        openId: "0_S001",
        description: "",
      },
      jobBoard: {
        imageSrc: NoImage,
        description: undefined,
      },
    },
    platinumGoldSponsors: [
      {
        name: "GMO Flatt Security株式会社",
        imageSrc: GMOFSLogo,
        height: platinumGoldSponsorImageSize.height,
        width: platinumGoldSponsorImageSize.width,
        dialog: {
          openId: "S101",
          imageSrc: GMOFSLogo,
          description:
            "エンジニアの背中を預かるソフトウェアプロダクトの開発組織とそこで働くエンジニアにとって最適なセキュリティサービスを提供し、「背中を預けられる」存在になることがGMO Flatt Securityの使命です。",
        },
        jobBoard: {
          imageSrc: GMOFSLogo,
          description:
            "エンジニアの背中を預かるソフトウェアプロダクトの開発組織とそこで働くエンジニアにとって最適なセキュリティサービスを提供し、「背中を預けられる」存在になることがGMO Flatt Securityの使命です。",
        },
      },
      {
        name: "株式会社エブリー",
        imageSrc: EVERYLogo,
        height: platinumGoldSponsorImageSize.height,
        width: platinumGoldSponsorImageSize.width,
        dialog: {
          openId: "S102",
          imageSrc: EVERYLogo,
          description:
            'エブリーは、日本が抱える「食」「子育て」「地方創生」の3つの大きな課題に向き合っており、「デリッシュキッチン」をはじめ「トモニテ」「TIMELINE」と3つの動画メディアプラットフォームを運営しています。現在はメディアやプロダクトに蓄積される膨大なデータとテクノロジーを活用し、"暮らし"と"企業"をアップデートしていくことを目指しており、中でもユーザー/メーカー/小売りの三者をつなぐプラットフォームである「リテールメディア」の構築は今後の成長戦略の柱と位置付けて取り組んでいます。​​',
        },
        jobBoard: {
          imageSrc: EVERYLogo,
          description:
            'エブリーは、日本が抱える「食」「子育て」「地方創生」の3つの大きな課題に向き合っており、「デリッシュキッチン」をはじめ「トモニテ」「TIMELINE」と3つの動画メディアプラットフォームを運営しています。現在はメディアやプロダクトに蓄積される膨大なデータとテクノロジーを活用し、"暮らし"と"企業"をアップデートしていくことを目指しており、中でもユーザー/メーカー/小売りの三者をつなぐプラットフォームである「リテールメディア」の構築は今後の成長戦略の柱と位置付けて取り組んでいます。​​',
        },
      },
    ],
    goldSponsors: [
      {
        name: "株式会社Resilire",
        imageSrc: ResilireLogo,
        height: goldSponsorImageSize.height,
        width: goldSponsorImageSize.width,
        dialog: {
          openId: "S201",
          imageSrc: ResilireLogo,
          description:
            "世界中のサプライチェーン情報をつなぎ、モノづくりを持続可能にする。",
        },
        jobBoard: {
          imageSrc: ResilireLogo,
          description: undefined,
        },
      },
      {
        name: "株式会社OPTiM",
        imageSrc: OPTiMLogo,
        height: goldSponsorImageSize.height,
        width: goldSponsorImageSize.width,
        dialog: {
          openId: "S202",
          imageSrc: OPTiMLogo,
          description:
            "AI/IoT/Robotics関連の技術を用いて、第一次産業のDXを推進する企業です。各サービスの多くのサーバーサイドやエッジで動作するサービスにGolangを利用しています。",
        },
        jobBoard: {
          imageSrc: OPTiMLogo,
          description: undefined,
        },
      },
    ],
    silverSponsors: [
      {
        name: "株式会社LayerX",
        imageSrc: LayerXLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: LayerXLogo,
          description: undefined,
        },
      },
      {
        name: "ubie株式会社",
        imageSrc: UbieLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: UbieLogo,
          description: undefined,
        },
      },
      {
        name: "ファインディ株式会社",
        imageSrc: FindyLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: FindyLogo,
          description: undefined,
        },
      },
      {
        name: "GROOVE X 株式会社",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
      {
        name: "株式会社U-NEXT",
        imageSrc: UNextLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: UNextLogo,
          description: undefined,
        },
      },
      {
        name: "株式会社クロステック・マネジメント",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
      {
        name: "さくらインターネット株式会社",
        imageSrc: SakuraLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: SakuraLogo,
          description: undefined,
        },
      },
      {
        name: "東急株式会社",
        imageSrc: TokyuLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: TokyuLogo,
          description: undefined,
        },
      },
      {
        name: "Bloomberg",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
      {
        name: "株式会社ナレッジワーク",
        imageSrc: KnoledgeWorkLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: KnoledgeWorkLogo,
          description: undefined,
        },
      },
      {
        name: "株式会社SODA",
        imageSrc: SODALogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: SODALogo,
          description: undefined,
        },
      },
      {
        name: "株式会社GROWTH VERSE",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
      {
        name: "株式会社Topotal",
        imageSrc: TopotalLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: TopotalLogo,
          description: undefined,
        },
      },
      {
        name: "株式会社Datachain",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
      {
        name: "テックタッチ株式会社",
        imageSrc: TechTouchLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: TechTouchLogo,
          description: undefined,
        },
      },
      {
        name: "株式会社はてな",
        imageSrc: HatenaLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: HatenaLogo,
          description: undefined,
        },
      },
      {
        name: "株式会社カンム",
        imageSrc: NoImage,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
      {
        name: "IssueHunt株式会社",
        imageSrc: IssueHuntLogo,
        height: silverSponsorImageSize.height,
        width: silverSponsorImageSize.width,
        dialog: {
          title: "IssueHunt株式会社",
          description: "Description for IssueHunt株式会社",
        },
        jobBoard: {
          imageSrc: IssueHuntLogo,
          description: undefined,
        },
      },
    ],
    bronzeSponsors: [
      {
        number: 20,
        name: "",
        imageSrc: NoImage,
        height: bronzeSponsorImageSize.height,
        width: bronzeSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: "",
        },
      },
    ],
    gopherSponsors: [
      {
        number: 30,
        name: "",
        imageSrc: NoImage,
        height: gopherSponsorImageSize.height,
        width: gopherSponsorImageSize.width,
        jobBoard: {
          imageSrc: NoImage,
          description: undefined,
        },
      },
    ],
    toolSponsor: {
      name: "株式会社LayerX",
      imageSrc: LayerXLogo,
      height: toolSponsorImageSize.height,
      width: toolSponsorImageSize.width,
    },
  },
} as const;

export const AllSponsors = () => {
  return [
    constants.sponsors.venueSponsor,
    constants.sponsors.specialSponsor,
    ...constants.sponsors.platinumGoldSponsors,
    ...constants.sponsors.goldSponsors,
    ...constants.sponsors.silverSponsors,
    ...constants.sponsors.bronzeSponsors,
  ];
};
