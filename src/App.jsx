// src/App.jsx
import './App.css'
import Experience from './components/Experience'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Remma Koshino</h1>
      <p>Welcome to my portfolio! 🚀</p>

      <section style={{ marginTop: '2rem' }}>
        <p>生年月日: 1999/01/30</p>
        <p>年齢: 26歳</p>

        <h2 style={{ marginTop: '2rem' }}>取得資格</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>ORACLE MASTER Silver DBA 2019</li>
          <li>AWS-Solutionarchitect-Professional (SAP)</li>
          <li>認定Kubernetes管理者 (CKA-JP)</li>
          <li>認定Kubernetesアプリケーション開発者 (CKAD-JP)</li>
          <li>Docker Certified Associate (DCA)</li>
          <li>Azure 管理者アソシエイト (AZ-104試験)</li>
          <li>Python 3 エンジニア認定実践試験</li>
          <li>Python 3 エンジニア認定データ分析実践試験</li>
          <li>AWS-Developer-Associate (DVA)</li>
          <li>AWS-DevOps-Professional (DOP)</li>
          <li>AWS Certified SysOps Administrator - Associate</li>
        </ul>
      </section>

      <Experience />
    </div>
  )
}

export default App
