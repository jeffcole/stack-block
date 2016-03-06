const selectors = [
  '#chat-feature',
  '#herobox',
  '#hireme',
  '#hot-network-questions',
  '#newsletter-ad',
  '[id*="careers"]',
  '.module.community-bulletin',
];

$.each(selectors, (_, selector) => {
  $(selector).remove();
});
