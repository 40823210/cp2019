var tipuesearch = {"pages": [{'title': 'Pikachu', 'text': '2019 Fall 計算機程式課程網頁: http://mde.tw/cp2019 \xa0 \n 40823210的倉儲: https://github.com/40823210/cp2019 \n \n', 'tags': '', 'url': 'Pikachu.html'}, {'title': 'Work', 'text': '', 'tags': '', 'url': 'Work.html'}, {'title': 'Hello work(w3)', 'text': '原始碼 : \n void main() {\n    print("Pikachu!皮卡!");\n  } \n ### https://dartpad.dev?id=5b59e62ad166b984e377718f7efeaf27 \n \n \n', 'tags': '', 'url': 'Hello work(w3).html'}, {'title': '圖片上傳(w4)', 'text': '圖片上傳-image files upload \n \n 皮卡丘-Pikachu \n \n \n', 'tags': '', 'url': '圖片上傳(w4).html'}, {'title': 'For迴圈(w6)', 'text': '原始碼 : \n int i;\nint sum;\n\xa0\nmain(){\n\xa0\xa0sum = 0;\n\xa0\xa0for(i=1;i <= 10 ;i++){\n\xa0\xa0\xa0\xa0sum += i;\n\xa0\xa0\xa0\xa0print("$sum");\n\xa0\xa0}\n\xa0\xa0print(\'sum = $sum\');\n} \n \xa0 程式碼 \xa0\xa0 \n ### https://dartpad.dartlang.org/embed-dart.html?gh_owner=40823210&gh_repo=cp2019&gh_path=downloads/dart_ex/for&theme=dark \xa0 \n \n', 'tags': '', 'url': 'For迴圈(w6).html'}, {'title': 'For迴圈與函式(w7)', 'text': '原始碼 : \n const num m = 1;\nconst num f = 0.0;\nconst num k = 1;\nconst num b = 1;\nrungeKutta(t0, x0, v0, t, h) {\n  int n = ((t - t0) / h).toInt();\n  double x = x0;\n  double v = v0;\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n  for (int i = 1; i <= n; i++) {\n    double xk1 = h * dxdt(t0, x, v);\n    double vk1 = h * dvdt(t0, x, v);\n    double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);\n    double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);\n    x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);\n    v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);\n    t0 = t0 + h;\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n  }\n  return [x, v];\n}\ndxdt(t, x, v) {\n  return v;\n}\ndvdt(t, x, v) {\n  return (f - k * x - b * v) / m;\n}\nmain() {\n  num t0 = 0;\n  num x0 = 1;\n  num v0 = 0;\n  num t = 5;\n  double h = 0.1;\n  rungeKutta(t0, x0, v0, t, h);\n} \n 程式碼 \n ### https://dartpad.dartlang.org/embed-dart.html?gh_owner=40823210&gh_repo=cp2019&gh_path=downloads/dart_ex/mass_spring_damping&theme=dark \n \n 利用 Excel 繪出上述解微分方程式模擬結果 : \n \n \n \n \n \n', 'tags': '', 'url': 'For迴圈與函式(w7).html'}, {'title': '嵌入 Dartpad(w8)', 'text': '放大   回復   Hello   For Loop   Sum   Runge-Kutta   Mass Spring Damping   ROC Flag   Grid   Slithery   Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n \n \n', 'tags': '', 'url': '嵌入 Dartpad(w8).html'}, {'title': '課程筆記', 'text': '\n \n', 'tags': '', 'url': '課程筆記.html'}, {'title': '期中考(w9)', 'text': '\n', 'tags': '', 'url': '期中考(w9).html'}, {'title': '建立分組倉儲(w10)', 'text': '\n 小組"倉儲&網頁"名稱: CP2019bg5 \n \n CP2019bg5倉儲: https://github.com/s40523111/cp2019bg5 \n \n CP2019bg5網頁: https://s40523111.github.io/cp2019bg5/content/index.html \n \n', 'tags': '', 'url': '建立分組倉儲(w10).html'}, {'title': '華氏與攝氏(w11)', 'text': '\n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery Temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n 溫度 \n temperature \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n \n \n', 'tags': '', 'url': '華氏與攝氏(w11).html'}, {'title': '數列(w12)', 'text': '\n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n temperature \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery 亂數分組 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n 數列 \n sequence \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n w12任務一影片 \n', 'tags': '', 'url': '數列(w12).html'}, {'title': 'w14', 'text': '國旗 \n \n \n 溫度轉換 請輸入轉換溫度: (數字加上 C or F)     轉換結果: \n \n', 'tags': '', 'url': 'w14.html'}, {'title': '查驗考試(w16)', 'text': '', 'tags': '', 'url': '查驗考試(w16).html'}]};