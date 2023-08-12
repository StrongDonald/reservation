import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from 'react';
import "./index.css";

function Rule() {
  const dispatch = useDispatch();
 
  return (
    <div className="Rule">
      <div className="Rule_content">
        <div className="Rule_content_box">
          <div className="Rule_content_title">
              <div></div>
              <p>利用規約</p>
          </div>

          <div className="Rule_content_text">
          株式会社ASAHIサポートセンターでは、個人情報を下記の通り取扱いさせていただくものとします。
          <br /><br />
          【１】収集目的<br />
          ・酪農ヘルパー業務の予約受付 、サポート <br />
          ・酪農ヘルパー業務お申込み後のご連絡 <br />
          ・お申込み頂いた方からのお問い合わせ、またはご依頼などへの対応 <br />
          <br /><br />
          【２】個人情報の提供<br />
          酪農ヘルパー予約システムの運用保守およびサポート委託にあたり、当社と秘密保持契約を結ぶ第三者企業に対し、ご提供頂いた個人情報を業務上必要な範囲に限って提供することがございます。<br />
          <br /><br />
          【３】個人情報提供の任意性と不足の場合の結果<br />
          ご提供頂く個人情報の項目については任意性を尊重いたしますが、それに不足部分がある場合は、適切なサービスができないことがあります。<br />
          <br /><br />
          【４】開示、訂正、削除の要求<br />
          個人情報の開示、訂正、削除要請には速やかに応じるものとしますが、コールバックなどの方法で本人確認をさせて頂きますので、ご了承ください。<br />
          <br /><br />
          【５】問い合わせ、開示、訂正、削除の受け付け<br />
          個人情報収集目的に関してのお問い合わせ、開示、訂正、削除のご請求は下記受付窓口までお願いいたします。<br />
          <br /><br />
          ＜問合せ受付窓口＞<br />
          住所　北海道野付郡別海町別海緑町116番地12<br />
          TEL　0153-77-9951<br />
          xxxxxxxx@example.com<br />
          株式会社ASAHIサポートセンター<br />
          管理 部：個人情報保護管理責任者（姓名　入力）<br />
          <br /><br />
          制定：xxxx年xx月xx日<br />
          改定：xxxx年xx月xx日<br />
          株式会社ASAHIサポートセンター<br />
          代表取締役社長　田中博行<br />
          </div>

          <div className="Rule_content_btn">
            <Link to={"/user/login"}>
              <button onClick={() =>
                  dispatch({
                    type: "userFront",
                  })
                }>TOPへ戻る</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rule;
