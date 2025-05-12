// src/components/Experience.jsx

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '1rem', margin: '2rem auto', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>経歴</h2>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>自動車メーカー様向けインフラシステム設計・構築・運用自動化（2024年6月〜2025年6月）</h3>
        
        <p><strong>役割：</strong>SREエンジニア</p>

        <p style={{ marginTop: '0.5rem' }}><strong>担当業務：</strong>Amazon EKS for Fargate の設計および構築</p>

        <p style={{ marginTop: '0.5rem' }}><strong>習得スキル：</strong>AWS、EKS、ArgoCD、New Relic、Snowflake</p>

        <p style={{ marginTop: '0.5rem' }}><strong>コメント：</strong></p>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li>AWS CloudFormation を用いたインフラ環境のコード化・自動構築</li>
          <li>New Relic を使った監視設計および Lambda + Amazon Connect による運用自動化</li>
          <li>Snowflake 向け Prometheus Exporter の導入と New Relic 監視連携</li>
          <li>OpenTelemetry の導入による Trace 監視の設計と実装</li>
          <li>マルチクラスタ構成における ArgoCD による自動デプロイの設計・導入</li>
        </ul>

        <p style={{ marginTop: '0.5rem' }}><strong>担当フェーズ：</strong>基本設計、詳細設計、構築・設定、運用設計</p>
      </div>
    </section>
  );
};

export default Experience;

