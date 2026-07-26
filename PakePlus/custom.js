window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
    'use strict';

    // ========== 注入样式 ==========
    var style = document.createElement('style');
    style.textContent = '.task-helper-float{position:fixed;top:8px;right:8px;width:230px;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);background:rgba(255,255,255,0.95);border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.12);z-index:999999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif;font-size:11px;color:#1a1a2e;overflow:hidden;border:1px solid rgba(200,200,200,0.25);user-select:none}.task-helper-float.minimized{height:30px;overflow:hidden;cursor:pointer}.task-helper-float .th-header{display:flex;align-items:center;justify-content:space-between;padding:4px 8px;background:linear-gradient(135deg,#4f7df3,#6c5ce7);color:#fff;cursor:move;min-height:30px;border-radius:8px 8px 0 0;font-size:11px}.th-header-left{display:flex;align-items:center;gap:4px}.th-refresh-btn{background:rgba(255,255,255,0.2);border:none;color:#fff;width:20px;height:20px;border-radius:4px;cursor:pointer;font-size:12px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;transition:background 0.2s}.th-refresh-btn:hover{background:rgba(255,255,255,0.35)}.th-header-title{display:flex;align-items:center;gap:3px;font-weight:600;cursor:pointer;padding:2px 6px;border-radius:4px;transition:background 0.2s;white-space:nowrap}.th-header-title:hover{background:rgba(255,255,255,0.15)}.task-helper-float .th-header-actions{display:flex;gap:3px}.task-helper-float .th-header-actions button{background:rgba(255,255,255,0.2);border:none;color:#fff;width:20px;height:20px;border-radius:4px;cursor:pointer;font-size:12px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0}.task-helper-float .th-body{padding:5px 8px 8px;overflow-y:auto;max-height:calc(100vh - 120px)}.th-address-section{margin-bottom:5px;padding-bottom:5px;border-bottom:1px solid #eee}.th-address-label{font-size:9px;font-weight:600;color:#888;margin-bottom:1px}.th-address-row{display:flex;align-items:center;gap:4px}.th-address-text{flex:1;background:#f5f7fb;padding:2px 4px;border-radius:3px;border:1px solid #e8ecf2;font-size:10px;min-height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.th-address-text.input-mode input{width:100%;border:none;background:transparent;outline:none;font-size:10px;padding:1px 0}.th-btn-copy-addr{flex-shrink:0;padding:1px 8px;background:#4f7df3;color:#fff;border:none;border-radius:3px;font-size:10px;cursor:pointer;height:20px;font-weight:500;white-space:nowrap}.th-btn-copy-addr:hover{background:#3a6adf}.th-btn-copy-addr.copied{background:#00b894}.th-keyword-section{margin-top:1px}.th-keyword-label{display:flex;justify-content:space-between;align-items:center;font-size:9px;font-weight:600;color:#888;margin-bottom:2px}.th-keyword-label .count-badge{background:#eef1f8;color:#4f7df3;padding:0 6px;border-radius:8px;font-size:9px;line-height:16px}.th-keyword-label-left{display:flex;align-items:center;gap:4px}.th-help-btn{background:transparent;border:1px solid #d6dff0;color:#4f7df3;border-radius:3px;font-size:8px;cursor:pointer;padding:0 4px;height:16px;line-height:1}.th-help-btn:hover{background:#4f7df3;color:#fff;border-color:#4f7df3}.th-keyword-list{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:4px}.th-keyword-item{display:flex;align-items:center;justify-content:space-between;padding:2px 4px 2px 6px;background:#f7f9fc;border-radius:3px;border:1px solid #eef1f8;min-width:0}.th-keyword-item .kw-name{flex:1;font-weight:500;font-size:10px;margin-right:3px;cursor:text;padding:0 2px;border-radius:2px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;min-width:0}.th-keyword-item .kw-name:focus{outline:1px solid #4f7df3;background:#fff}.th-keyword-item .kw-actions{display:flex;gap:2px;flex-shrink:0}.th-btn-copy-kw{padding:0 5px;background:transparent;color:#4f7df3;border:1px solid #d6dff0;border-radius:3px;font-size:8px;cursor:pointer;height:16px;font-weight:500;white-space:nowrap;line-height:1}.th-btn-copy-kw:hover{background:#4f7df3;color:#fff;border-color:#4f7df3}.th-btn-copy-kw.copied{background:#00b894;color:#fff;border-color:#00b894}.th-btn-copy-all{width:100%;padding:4px 0;background:linear-gradient(135deg,#00b894,#00a381);color:#fff;border:none;border-radius:4px;font-size:10px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:3px;margin-top:2px;margin-bottom:2px;transition:none}.th-btn-copy-all:hover{transform:translateY(-1px);box-shadow:0 2px 8px rgba(0,184,148,0.25)}.th-btn-copy-all.copied{background:#2d3436}.th-btn-copy-all:disabled{opacity:0.6;cursor:not-allowed;transform:none}.th-toast{position:fixed;top:50px;left:50%;transform:translateX(-50%) translateY(-10px);background:rgba(0,0,0,0.75);color:#fff;padding:4px 14px;border-radius:6px;font-size:11px;font-weight:500;z-index:9999999;opacity:0;transition:all 0.25s ease;backdrop-filter:blur(4px);pointer-events:none}.th-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}.task-helper-float.dragging{opacity:0.85;transition:none;cursor:grabbing}.task-helper-float .th-body::-webkit-scrollbar{width:2px}.task-helper-float .th-body::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}';
    document.head.appendChild(style);

    // ========== 工具函数 ==========
    function showToast(msg, duration) {
        duration = duration || 1200;
        var toast = document.querySelector('.th-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'th-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(function() { toast.classList.remove('show'); }, duration);
    }

    function copyText(text, successMsg) {
        if (!text || !text.trim()) { showToast('⚠️ 无内容', 800); return false; }
        try {
            navigator.clipboard.writeText(text.trim()).then(function() {
                showToast(successMsg || '✅ 已复制', 800);
            });
            return true;
        } catch (e) {
            try {
                var ta = document.createElement('textarea');
                ta.value = text.trim();
                ta.style.cssText = 'position:fixed;opacity:0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                ta.remove();
                showToast(successMsg || '✅ 已复制', 800);
                return true;
            } catch (err) {
                showToast('❌ 复制失败', 800);
                return false;
            }
        }
    }

    // ========== 地址提取 ==========
    function extractAddress() {
        var addrEl = document.querySelector('.ellipsis___Bv15s');
        if (addrEl && addrEl.textContent.indexOf('定位地址：') !== -1) {
            return addrEl.textContent.replace('定位地址：', '').trim();
        }
        var taskItem = document.querySelector('.task-item___qSC4e');
        if (taskItem) {
            var addrSpans = taskItem.querySelectorAll('.ellipsis___Bv15s');
            for (var i = 0; i < addrSpans.length; i++) {
                var txt = addrSpans[i].textContent.trim();
                if (txt.indexOf('定位地址：') !== -1) return txt.replace('定位地址：', '').trim();
                if (/市|区|县|镇|乡|路|街|号/.test(txt) && txt.length > 5) return txt;
            }
        }
        return null;
    }

    // ========== 关键词提取 ==========
    function extractKeywords() {
        var keywords = [];
        var abandonBtn = document.querySelector('.cancel-btn___MQhC3');
        if (!abandonBtn) return [];
        var taskContainer = abandonBtn.closest('.task-item___qSC4e');
        if (!taskContainer) return [];
        var keyBlocks = taskContainer.querySelectorAll('.key___KDAP0');
        for (var i = 0; i < keyBlocks.length; i++) {
            var priceEl = keyBlocks[i].querySelector('.num___hAchJ');
            var keywordEl = keyBlocks[i].querySelector('.ellipsis___Bv15s');
            if (!priceEl || !keywordEl) continue;
            var priceText = priceEl.textContent.trim();
            if (priceText === '￥0.4' || priceText === '¥0.4') {
                var kw = keywordEl.textContent.trim();
                if (kw && keywords.indexOf(kw) === -1) {
                    keywords.push(kw);
                }
            }
        }
        return keywords;
    }

    // ========== 创建浮窗 ==========
    function createFloat() {
        if (document.querySelector('.task-helper-float')) return;

        var container = document.createElement('div');
        container.className = 'task-helper-float';
        container.id = 'taskHelperFloat';

        var wasMinimized = localStorage.getItem('th_helper_minimized') === 'true';
        if (wasMinimized) {
            container.classList.add('minimized');
        }

        var header = document.createElement('div');
        header.className = 'th-header';
        header.innerHTML = '<div class="th-header-left"><button class="th-refresh-btn" id="thRefreshBtn" title="刷新页面">🔄</button><span class="th-header-title" id="thTitleClick">助手（点击进钉钉群）</span></div><div class="th-header-actions"><button class="th-toggle-min">' + (wasMinimized ? '+' : '−') + '</button><button class="th-close">✕</button></div>';

        var body = document.createElement('div');
        body.className = 'th-body';

        var addrSection = document.createElement('div');
        addrSection.className = 'th-address-section';
        addrSection.innerHTML = '<div class="th-address-label">📍 地址</div><div class="th-address-row"><div class="th-address-text" id="thAddressDisplay"><span>⏳</span></div><button class="th-btn-copy-addr" id="thCopyAddrBtn">复制</button></div>';

        var kwSection = document.createElement('div');
        kwSection.className = 'th-keyword-section';
        kwSection.innerHTML = '<div class="th-keyword-label"><div class="th-keyword-label-left"><span>🔑 关键词</span><button class="th-help-btn" id="thHelpBtn">使用说明</button></div><span class="count-badge" id="kwCount">0</span></div><div class="th-keyword-list" id="thKeywordList"></div><button class="th-btn-copy-all" id="thCopyAllBtn">一键复制所有关键词</button><div id="thHelpPanel" style="display:none;margin-top:5px;background:#f7f9fc;border:1px solid #d6dff0;border-radius:4px;padding:4px;font-size:10px;color:#1a1a2e;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;"><strong style="font-size:10px;">📖 使用说明</strong><button id="thHelpCloseBtn" style="background:transparent;border:none;color:#888;cursor:pointer;font-size:12px;line-height:1;">✕</button></div><div style="white-space:pre-line;line-height:1.5;">【使用步骤】\n1.点击「一键复制所有关键词」可批量复制全部关键词，按顺序逐个复制，只复制前一个任务的。\n2.点击左上角 🔄 可刷新页面；点击「助手（点击进钉钉群）」可复制群号。\n\n【常见问题】\n- 如果关键词数量不对，请点击 🔄 刷新页面。\n-点击一键复制全部如果没有复制成功，请把剪切板权限打开\n\n钉钉群号：162885046139\n脚本改进或者是增加实用功能，可以进钉钉群反馈。</div></div>';

        body.appendChild(addrSection);
        body.appendChild(kwSection);
        container.appendChild(header);
        container.appendChild(body);
        document.body.appendChild(container);

        function renderKeywords(keywords) {
            var list = document.getElementById('thKeywordList');
            var count = document.getElementById('kwCount');
            list.innerHTML = '';
            if (!keywords || keywords.length === 0) {
                list.innerHTML = '<div style="color:#b0b8c4;text-align:center;padding:4px 0;font-size:9px;grid-column:1/-1;">无</div>';
                count.textContent = '0';
                return;
            }
            count.textContent = keywords.length;
            keywords.forEach(function(kw) {
                var item = document.createElement('div');
                item.className = 'th-keyword-item';
                item.innerHTML = '<span class="kw-name" contenteditable="false" title="' + kw + '">' + kw + '</span><div class="kw-actions"><button class="th-btn-copy-kw" data-kw="' + kw + '">复制</button></div>';
                list.appendChild(item);
            });
            list.querySelectorAll('.th-btn-copy-kw').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var kw = this.getAttribute('data-kw');
                    copyText(kw, '✅ ' + kw);
                    this.classList.add('copied');
                    this.textContent = '✓';
                    var that = this;
                    setTimeout(function() { that.classList.remove('copied'); that.textContent = '复制'; }, 1000);
                });
            });
            list.querySelectorAll('.kw-name').forEach(function(span) {
                span.addEventListener('dblclick', function(e) {
                    e.stopPropagation();
                    var current = this.textContent;
                    var input = document.createElement('input');
                    input.type = 'text';
                    input.value = current;
                    input.style.cssText = 'width:100%;border:1px solid #4f7df3;border-radius:2px;padding:0 2px;font-size:10px;background:#fff;';
                    this.textContent = '';
                    this.appendChild(input);
                    input.focus();
                    input.select();
                    var save = function() {
                        var newVal = input.value.trim();
                        if (newVal) {
                            span.textContent = newVal;
                            span.title = newVal;
                            var btn = span.closest('.th-keyword-item').querySelector('.th-btn-copy-kw');
                            if (btn) btn.setAttribute('data-kw', newVal);
                        } else {
                            span.textContent = current;
                            span.title = current;
                        }
                    };
                    input.addEventListener('blur', save);
                    input.addEventListener('keydown', function(e) { if (e.key === 'Enter') { input.blur(); } });
                });
            });
        }

        function updateAddressDisplay(addr) {
            var display = document.getElementById('thAddressDisplay');
            if (addr && addr.trim()) {
                display.innerHTML = '<span title="' + addr.trim() + '">' + addr.trim() + '</span>';
                display.className = 'th-address-text';
            } else {
                display.className = 'th-address-text input-mode';
                display.innerHTML = '<input type="text" id="thAddressInput" placeholder="输入地址..." />';
                var input = display.querySelector('#thAddressInput');
                var saved = localStorage.getItem('th_helper_address');
                if (saved) input.value = saved;
                input.addEventListener('input', function() {
                    localStorage.setItem('th_helper_address', this.value.trim());
                });
                input.addEventListener('keydown', function(e) { if (e.key === 'Enter' && this.value.trim()) document.getElementById('thCopyAddrBtn').click(); });
            }
        }

        function refreshAll() {
            var addr = extractAddress();
            if (addr) {
                updateAddressDisplay(addr);
                localStorage.setItem('th_helper_address', addr);
            } else {
                var saved = localStorage.getItem('th_helper_address');
                if (saved) updateAddressDisplay(saved);
            }
            var extracted = extractKeywords();
            if (extracted.length > 0) {
                renderKeywords(extracted);
                localStorage.setItem('th_helper_keywords', JSON.stringify(extracted));
            } else {
                var saved = localStorage.getItem('th_helper_keywords');
                if (saved) {
                    try {
                        var arr = JSON.parse(saved);
                        if (Array.isArray(arr) && arr.length) renderKeywords(arr);
                    } catch(e) {}
                } else {
                    renderKeywords([]);
                }
            }
        }

        // 窗口控制
        header.querySelector('.th-close').addEventListener('click', function() { container.style.display = 'none'; });
        var isMinimized = wasMinimized;
        header.querySelector('.th-toggle-min').addEventListener('click', function(e) {
            e.stopPropagation();
            isMinimized = !isMinimized;
            container.classList.toggle('minimized', isMinimized);
            this.textContent = isMinimized ? '+' : '−';
            localStorage.setItem('th_helper_minimized', isMinimized);
        });
        container.addEventListener('click', function(e) {
            if (isMinimized && !e.target.closest('.th-header-actions')) {
                isMinimized = false;
                container.classList.remove('minimized');
                header.querySelector('.th-toggle-min').textContent = '−';
                localStorage.setItem('th_helper_minimized', false);
            }
        });

        // 拖拽
        var isDragging = false, offsetX, offsetY;
        header.addEventListener('mousedown', function(e) {
            if (e.target.closest('.th-header-actions') || e.target.closest('#thTitleClick') || e.target.closest('#thRefreshBtn')) return;
            isDragging = true;
            var rect = container.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            container.classList.add('dragging');
            e.preventDefault();
        });
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            var x = e.clientX - offsetX, y = e.clientY - offsetY;
            x = Math.max(8, Math.min(x, window.innerWidth - container.offsetWidth - 8));
            y = Math.max(8, Math.min(y, window.innerHeight - container.offsetHeight - 8));
            container.style.left = x + 'px';
            container.style.right = 'auto';
            container.style.top = y + 'px';
            container.style.bottom = 'auto';
        });
        document.addEventListener('mouseup', function() {
            if (isDragging) { isDragging = false; container.classList.remove('dragging'); }
        });

        // 刷新按钮 - 保持最小化状态刷新
        document.getElementById('thRefreshBtn').addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            location.reload();
        });

        // 点击标题复制钉钉群号
        document.getElementById('thTitleClick').addEventListener('click', function(e) {
            e.stopPropagation();
            var groupNumber = '162885046139';
            copyText(groupNumber, '📢 钉钉群号已复制：' + groupNumber);
            var origText = this.textContent;
            this.textContent = '✅ 已复制群号';
            var that = this;
            setTimeout(function() { that.textContent = origText; }, 2000);
        });

        // 复制地址
        document.getElementById('thCopyAddrBtn').addEventListener('click', function() {
            var display = document.getElementById('thAddressDisplay');
            var addr = '';
            var input = display.querySelector('input');
            if (input) addr = input.value.trim();
            else addr = display.textContent.trim();
            if (addr && addr !== '⏳' && addr !== '未检测到地址') {
                copyText(addr, '✅ 地址');
                this.classList.add('copied');
                this.textContent = '已复制';
                var that = this;
                setTimeout(function() { that.classList.remove('copied'); that.textContent = '复制'; }, 1200);
            } else {
                showToast('⚠️ 输入地址', 800);
            }
        });

        // 一键复制所有关键词
        var copyAllBtn = document.getElementById('thCopyAllBtn');
        copyAllBtn.addEventListener('click', function() {
            var names = [];
            document.querySelectorAll('#thKeywordList .kw-name').forEach(function(span) {
                var t = span.textContent.trim();
                if (t) names.push(t);
            });
            if (names.length === 0) {
                showToast('⚠️ 无关键词', 800);
                return;
            }
            this.disabled = true;
            var originalText = this.textContent;
            this.textContent = '复制中…';
            var idx = 0;
            function copyNext() {
                if (idx >= names.length) {
                    copyAllBtn.disabled = false;
                    copyAllBtn.textContent = originalText;
                    showToast('✅ 已全部复制 ' + names.length + ' 个', 1200);
                    return;
                }
                var kw = names[idx];
                try {
                    navigator.clipboard.writeText(kw);
                } catch (e) {
                    var ta = document.createElement('textarea');
                    ta.value = kw;
                    ta.style.cssText = 'position:fixed;opacity:0';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    ta.remove();
                }
                idx++;
                setTimeout(copyNext, 50);
            }
            copyNext();
        });

        // 使用说明面板
        document.getElementById('thHelpBtn').addEventListener('click', function(e) {
            e.stopPropagation();
            var panel = document.getElementById('thHelpPanel');
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        });
        document.getElementById('thHelpCloseBtn').addEventListener('click', function(e) {
            e.stopPropagation();
            document.getElementById('thHelpPanel').style.display = 'none';
        });

        // 初始加载与定时刷新
        setTimeout(function() {
            refreshAll();
            setTimeout(refreshAll, 1500);
        }, 500);
        setInterval(refreshAll, 2 * 60 * 1000);

        // DOM 监听
        var observerTimer;
        var observer = new MutationObserver(function() {
            clearTimeout(observerTimer);
            observerTimer = setTimeout(function() {
                var currentKeywords = [];
                document.querySelectorAll('#thKeywordList .kw-name').forEach(function(span) {
                    currentKeywords.push(span.textContent.trim());
                });
                var newKeywords = extractKeywords();
                if (newKeywords.length > 0) {
                    var currentStr = currentKeywords.join(',');
                    var newStr = newKeywords.join(',');
                    if (currentStr !== newStr) {
                        renderKeywords(newKeywords);
                        localStorage.setItem('th_helper_keywords', JSON.stringify(newKeywords));
                    }
                }
                var addr = extractAddress();
                if (addr) {
                    var display = document.getElementById('thAddressDisplay');
                    if (display.textContent.trim() !== addr.trim()) {
                        updateAddressDisplay(addr);
                        localStorage.setItem('th_helper_address', addr);
                    }
                }
            }, 500);
        });
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        container._observer = observer;
    }

    // 启动浮窗
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createFloat);
    } else {
        createFloat();
    }
})();