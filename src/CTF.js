import React from 'react';
import { isBrowser } from 'react-device-detect';
import { Container, Row, Column, OrderList, Emphasis } from './Utils';

const CTF = () => (
  <Container title="CTF競賽">
    <Row style={isBrowser ? { fontSize: '18px' } : {}}>
      <Column title="活動目的">
        <p>
          為啟發本國學生對資訊安全學習的興趣，特舉辦「初階CTF」競賽活動，希望藉由CTF競賽活動鼓舞學生對資訊安全的學習熱誠，以期培育資安技術人員與提升資安教育水準。
        </p>
      </Column>
      <Column title="參加資格">
        <p>對資安競賽有興趣且25歲(含)以下本國籍在學學生。</p>
      </Column>
      <Column title="報名方式">
        <OrderList cjk>
          {[
            <Emphasis key="key">
              報名日期:自109年03月13日起至報名人數額滿為止。
            </Emphasis>,
            <React.Fragment key="key">
              <p>
                本活動採網路報名，<Emphasis>無須繳交競賽報名費用</Emphasis>，
                <Emphasis highlight>以個人為單位</Emphasis>
                ，有意參賽者請完成報名資料填寫。
              </p>

              <p className="text-danger">
                報名已額滿，現場開放候補(不保證補上)。
              </p>
              <p className="text-danger">
                請於109年09月03日 上午08:30-08:50至報到處填寫候補名單。
              </p>
            </React.Fragment>,

            '網站填寫之報名表內容需完整及正確填寫，俾利聯絡活動相關事宜。',
            <React.Fragment key="key">
              參賽者需於競賽當天
              <Emphasis highlight>
                出示加蓋108學年註冊章的學生證或在學證明聲明書(加蓋學校/科/系/所辦公室戳印)。
              </Emphasis>
            </React.Fragment>,
          ]}
        </OrderList>
      </Column>
      <Column title="競賽說明">
        <OrderList cjk>
          {[
            <Emphasis key="key">競賽日期：109年09月03日9:00~12:00</Emphasis>,
            <Emphasis key="key">報到時間：上午8:30~9:00</Emphasis>,
            <Emphasis key="key">
              競賽地點：國立中山大學圖書資訊大樓11樓
            </Emphasis>,
            <React.Fragment key="key">
              <p>競賽方式：</p>
              <OrderList>
                {[
                  '透過競賽系統破解競賽試題取得試題金鑰，關卡與規則以競賽當天說明為主。',
                  '試題範圍包含逆向工程(Reverse)、網站相關(Web)、具漏洞的服務(Pwn)、加解密演算法(Crypto)與其他綜合(Misc)。',
                  '參賽者需自備電腦參加競賽，可攜帶競賽所需之各式電腦軟硬體工具或儲存媒體。',
                  '網際網路僅限於查詢及下載所需資料及工具軟體使用。',
                ]}
              </OrderList>
            </React.Fragment>,
            <React.Fragment key="key">
              評審方式:
              <OrderList>
                {[
                  '競賽採取積分累計制，依分數高低進行排序。同分者，依最後一次正確提交的時間判定，完成時間較短者為優先。',
                  '比賽成績若未臻理想則依據評審之決議，得以從缺辦理。',
                ]}
              </OrderList>
            </React.Fragment>,
          ]}
        </OrderList>
      </Column>
      <Column title="競賽獎勵">
        <p>第1名：頒發個人獎狀與3,000元禮券。</p>
        <p>第2名：頒發個人獎狀與2,000元禮券。</p>
        <p>第3名：頒發個人獎狀與1,000元禮券。</p>
        <p>嶄露頭角獎：頒發個人獎狀與500元禮券。</p>
        <OrderList cjk>
          {[
            '得獎參賽者成績不得為0分，主辦單位可視競賽後成績調整得獎名次，必要時得從缺或增加。',
            '嶄露頭角獎最多10名。',
            '參加者可獲得參加證明。',
          ]}
        </OrderList>
      </Column>
      <Column title="注意事項">
        <OrderList cjk>
          {[
            '參賽者須於指定時間內完成報到手續，逾時視同放棄參賽資格。',
            '參賽者須於報到時出示學生證與附有照片身分證明文件(如身分證、駕照、健保卡等)，以查驗身分。若身分查驗不符，將取消參賽資格。',
            '競賽期間參賽者可使用洗手間或至休息區飲用茶水，惟不得與其他參賽人員相互交談。',
            '參賽者於競賽結束後或中途退出競賽時，須將競賽提供之物品繳回給工作人員，離開競賽場地後，不得再進場。',
            '主辦單位可依狀況調整競賽的內容、流程及規則。如遭遇不可抗拒之因素，主辦單位有權終止競賽進行。',
          ]}
        </OrderList>
      </Column>
      <Column title="競賽禁止事項">
        <OrderList cjk>
          {[
            '參賽者於競賽中不得進行網路交談、對外通訊、網路攻擊或干擾競賽等行為。',
            '參賽者進入競賽場地後嚴禁使用行動裝置、無線AP分享器等通訊設備，以免干擾其他參賽者。',
            '參賽者於競賽中如需研討請輕聲交談，不得影響其他參賽者。',
            '競賽期間參賽者不得散播、與其他隊伍交換解法或Flag。',
            '競賽場地僅供參賽者及工作人員進入，參賽者如蓄意破壞競賽設備，應負賠償責任。',
            '參賽者於競賽期間如違反競賽規則或破壞競賽秩序，情節嚴重者得取消參賽資格。',
          ]}
        </OrderList>
      </Column>
      <Column title="聯絡方式">
        <p>中華民國資訊安全學會 陳秘書</p>
        <p>TEL: 07-5250558</p>
        <p>E-MAIL: cisc2020@ccisa.org.tw</p>
      </Column>
    </Row>
  </Container>
);

export default CTF;
