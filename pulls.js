function getCurrentRepositoryInfo() {
  const path = window.location.pathname;
  const segments = path.split("/").filter((segment) => segment);

  if (segments.length >= 2) {
    const owner = segments[0];
    const repo = segments[1];

    return { owner, repo };
  } else {
    console.error("Unable to extract repository info from URL.");
    return null;
  }
}

const { owner, repo } = getCurrentRepositoryInfo();

document.addEventListener("click", (e) => {
  const target = e.target.closest("a");
  if (target.tagName !== "A") {
    return;
  }
  const href = target.getAttribute("href");

  const url = new URL(href, window.location.origin);
  if (!url.pathname.startsWith(`/${owner}/${repo}/compare`)) {
    return;
  }

  // /:owner/:repo/compare/:prefix/:name or /:owner/:repo/compare/(develop|main)...:prefix/:name or /:owner/:repo/compare/:prefix/:name...:prefix/:name
  // などのパターンが考えられ面倒なので後ろから2番目のセグメントを取得することにする
  const segments = url.pathname.split(/\/|\.\.\./);
  let templateName = segments.at(-2);
  if (!templateName) {
    return;
  }

  e.preventDefault();
  url.searchParams.append("template", `${templateName}.md`);
  window.location.href = url;
})
