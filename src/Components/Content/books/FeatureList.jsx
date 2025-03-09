import React from "react";
import "./featyreCSS.css";
const FeatureList = () => {
  return (
    <div className="features-container">
      <h2>لماذا تختار معهدنا؟</h2>
      <ul className="feature-list">
        <li className="feature-item">
          <i className="fas fa-graduation-cap"></i>
          <span>مناهج دراسية معتمدة</span>
          <p>
            نقدم مناهج حديثة ومتكاملة تواكب أحدث معايير تدريس اللغة الإنجليزية.
          </p>
        </li>
        <li className="feature-item">
          <i className="fas fa-chalkboard-teacher"></i>
          <span>نخبة من المدرسين المؤهلين</span>
          <p>
            فريق تدريس متخصص ذو خبرة واسعة في تدريس اللغة لغير الناطقين بها.
          </p>
        </li>
        <li className="feature-item">
          <i className="fas fa-laptop"></i>
          <span>تقنيات تعليمية متطورة</span>
          <p>نستخدم أحدث الوسائل التعليمية التفاعلية لتعزيز تجربة التعلم.</p>
        </li>
        <li className="feature-item">
          <i className="fas fa-users"></i>
          <span>بيئة تعليمية محفزة</span>
          <p>نحرص على توفير بيئة مريحة وداعمة تشجع على المشاركة الفعالة.</p>
        </li>
        <li className="feature-item">
          <i className="fas fa-certificate"></i>
          <span>شهادات معتمدة</span>
          <p>نمنح شهادات معتمدة في نهاية كل مستوى تساعدك على تحقيق أهدافك.</p>
        </li>
      </ul>
    </div>
  );
};

export default FeatureList;
