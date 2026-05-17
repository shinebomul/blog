/* =========================================================
   원숭이 스프라이트 애니메이션
   - frame_uni_1.png ~ frame_uni_10.png 를 순환 재생
   - 메인 페이지든 글 페이지든 위치 상관없이 자동 동작
     (현재 img.src 의 경로를 기준으로 기타 프레임 경로를 구함)
   - 속도를 바꾸려면 frameDuration 숫자만 수정하세요 (ms).
   ========================================================= */
(function () {
  const img = document.querySelector('.astronaut');
  if (!img) return;

  // 첫 프레임 경로에서 디렉터리 부분만 떼어내기.
  // 예: "frame_uni_1.png" → "" / "../frame_uni_1.png" → "../"
  const src = img.getAttribute('src') || '';
  const base = src.replace(/frame_uni_\d+\.png$/, '');

  const frames = [];
  for (let i = 1; i <= 10; i++) frames.push(`${base}frame_uni_${i}.png`);

  // 단방향 루프: 1 → 2 → ... → 10 → 다시 1
  const sequence = [0,1,2,3,4,5,6,7,8,9];

  // 한 프레임당 머무는 시간 (ms). 작을수록 빠름.
  const frameDuration = 120;

  // 미리 로드해서 첫 재생 시 깜빡임 방지
  frames.forEach(s => { const i = new Image(); i.src = s; });

  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % sequence.length;
    img.src = frames[sequence[idx]];
  }, frameDuration);
})();
