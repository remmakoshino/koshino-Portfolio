const Experience = () => {
  return (
    <section style={{ backgroundColor: 'white', color: 'black', padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>経験</h2>
      <div>
        <p><strong>期間:</strong> 2024/06 ~ 2025/06</p>
        <p><strong>プロジェクト:</strong> 自動車メーカー様向けインフラシステムの設計及び構築、SREエンジニアとして運用の自動化</p>
        <p><strong>担当業務:</strong> Amazon EKS for Fargate の設計及び構築</p>
        <p><strong>習得スキル:</strong> AWS、EKS、Argocd、Newrelic、snowflake</p>
        <p><strong>コメント:</strong></p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>CloudFormation を用いた AWS 環境構築</li>
          <li>Newrelic による監視設計、Lambda & Amazon Connect による運用自動化</li>
          <li>snowflake 向け Prometheus Exporter を導入し、Newrelic との統合</li>
          <li>OpenTelemetry を活用した Trace 監視の設計と実装</li>
          <li>マルチクラスタ構成での ArgoCD 自動デプロイ設計・導入</li>
        </ul>
        <p><strong>担当フェーズ:</strong> 基本設計、詳細設計、構築・設定、運用設計</p>
      </div>
    </section>
  );
};

export default Experience;

