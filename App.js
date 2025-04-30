import React, { useState } from "react";

const questions = [
  "أُعرّف المشكلة بوضوح قبل محاولة حلها.",
  "أجمع المعلومات المتعلقة بالمشكلة من مصادر مختلفة.",
  "أحلل الأسباب الجذرية للمشكلة قبل التفكير في الحلول.",
  "أفكر في أكثر من حل بديل قبل اتخاذ القرار.",
  "أُقيّم مزايا وعيوب كل حل ممكن.",
  "أختار الحل الأنسب بناءً على التحليل المنطقي.",
  "أطبق الحل المختار بفعالية.",
  "أُتابع نتائج الحل للتأكد من فعاليتها.",
  "أُعدل الحل إذا لم يحقق النتائج المتوقعة.",
  "أتعلم من المشكلات السابقة لتحسين أدائي في المستقبل."
];

function App() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index, value) => {
    const updated = [...answers];
    updated[index] = parseInt(value);
    setAnswers(updated);
  };

  const total = answers.reduce((sum, val) => sum + (val || 0), 0);

  const result = () => {
    if (total >= 40) return "مهاراتك ممتازة في حل المشكلات.";
    if (total >= 30) return "لديك مهارات جيدة، مع إمكانية تحسين بعض الجوانب.";
    if (total >= 20) return "تحتاج إلى تطوير مهاراتك في حل المشكلات.";
    return "بحاجة إلى تدريب كبير على مهارات حل المشكلات.";
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>تقييم مهارات حل المشكلات</h1>
      {!submitted ? (
        <div>
          {questions.map((q, idx) => (
            <div key={idx} style={{ marginBottom: 20 }}>
              <p>{q}</p>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  style={{
                    margin: "0 5px",
                    backgroundColor: answers[idx] === num ? "#4CAF50" : "#e0e0e0",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                  onClick={() => handleSelect(idx, num)}
                >
                  {num}
                </button>
              ))}
            </div>
          ))}
          <button
            disabled={answers.includes(null)}
            onClick={() => setSubmitted(true)}
            style={{
              width: "100%",
              padding: 12,
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            عرض النتيجة
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>مجموعك: {total} من 50</h2>
          <p>{result()}</p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            إعادة التقييم
          </button>
        </div>
      )}
    </div>
  );
}

export default App;