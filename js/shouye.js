window.onload = function(){
				var box2_04 = document.getElementById("box2_04");
				var xcen = document.getElementById("xcen");
				xcen.onmousedown = function(){
					box2_04.style.display = "none";
				}
				var a3 = document.getElementById("a3");
				var ai = a3.getElementsByTagName("a");
				var last = ai[0];
				ai[0].style.backgroundColor = "#ff6800";
				ai[0].style.color = "white";
				ai[0].style.borderTopLeftRadius = "5px";
				ai[0].style.borderTopRightRadius = "5px";
				for(var i=0;i<ai.length;i++){
					ai[i].index = i;
					ai[i].onmousedown = function(){
						last.style.backgroundColor = "white";
						last.style.borderTopLeftRadius = "0px";
						last.style.borderTopRightRadius = "0px";
						last.style.color = "#ff6800";
						this.style.backgroundColor = "#ff6800";
						this.style.borderTopLeftRadius = "5px";
						this.style.borderTopRightRadius = "5px";
						this.style.color = "white";
						last = this;
					}
				}
//				第一个轮播图
				var lunbo_01 = document.getElementById("lunbo_01");
				var imgtu = document.getElementById("imgtu");
				var igl_01 = imgtu.getElementsByTagName("img");
				var xquan = document.getElementById("xquan");
				var sp = xquan.getElementsByTagName("span");
				var but1 = document.getElementById("but1");
				var but2 = document.getElementById("but2");
				sp[0].style.backgroundColor = "#F7931E";
				var width = igl_01[0].offsetWidth;
				var j = 0;
				var time = setInterval(fn,5000);
				function fn(){
					j++;
					spys();
					move(imgtu,"left",-width*j,30,function(){
						if(j==igl_01.length-1){
							imgtu.style.left = 0+"px";
							j=0;
						}
					});
				}
				lunbo_01.onmouseover = function(){
					clearInterval(time);
					but1.style.display = "block";
					but2.style.display = "block";
				}
				lunbo_01.onmouseout = function(){
					time = setInterval(fn,5000);
					but1.style.display = "none";
					but2.style.display = "none";
				}
				function spys(){
					for(var a=0;a<sp.length;a++){
						if(a==j){
							sp[a].style.backgroundColor = "#F7931E";
						}else{
							sp[a].style.backgroundColor = "white";
						}
					}
					if(j==sp.length){
							sp[0].style.backgroundColor = "#F7931E";
						}
				}
				for(var b=0;b<sp.length;b++){
					sp[b].index=b;
					sp[b].onmousedown = function(){
						j = this.index;
						spys();
						move(imgtu,"left",-width*this.index,20);
					}
				}
				but1.onmousedown = function(){
					j--;
					if(j==-1){
						imgtu.style.left = -width*sp.length+"px";
						j = sp.length-1;
					}
					spys();
					move(imgtu,"left",-width*j,30,function(){
						if(j==igl_01.length-1){
							imgtu.style.left = 0+"px";
							j = 0;
						}
					});
				}
				but2.onmousedown = function(){
					j++;
					if(j==sp.length+1){
						j = 1;
						imgtu.style.left = 0+"px";
					}
					spys();
					move(imgtu,"left",-width*j,30,function(){
						if(j==igl_01.length-1){
							imgtu.style.left = 0+"px";
							j = 0;
						}
					});
				}
//				第二个轮播图
                var liu = document.getElementById("liu");
                var hengtiao = document.getElementById("hengtiao");
                var elsp = hengtiao.getElementsByTagName("span");
                var dongtu = document.getElementById("dongtu");
                var ztp = document.getElementById("ztp");
                var erimg = ztp.getElementsByTagName("img");
                var but3 = document.getElementById("but3");
                var but4 = document.getElementById("but4");
                var width2 = erimg[0].offsetWidth;
                var time2 = setInterval(fn1,4800);
                var c = 0;
                var f = 0;
                elsp[0].style.backgroundColor = "black";
                function fn1(){
                	c++;
                	if(c==erimg.length-1){
                		liu.innerHTML = 1;
                	}else{
                		liu.innerHTML = c+1;
                	}
                	span2();
                	move(ztp,"left",-width2*c,30,function(){
                		if(c==erimg.length-1){
                			ztp.style.left = 0+"px";
                			c = 0;
                		}
                	});
                }
                for(var d=0;d<elsp.length;d++){
                	elsp[d].index=d;
                	elsp[d].onmousedown = function(){
                		c = this.index;
                		liu.innerHTML = this.index+1;
                		span2();
                		move(ztp,"left",-width2*this.index,30);
                	}
                	
                }
                function span2(){
                	for(var e=0;e<elsp.length;e++){
                		if(e==c){
                			elsp[e].style.backgroundColor = "black";
                		}else{
                			elsp[e].style.backgroundColor = "#ff184a";
                		}
                	}
                	if(c==elsp.length){
                		elsp[0].style.backgroundColor = "black";
                	}
                }
                but3.onmousedown = function(){
                	c--;
                	if(c==-1){
                		ztp.style.left = -width2*elsp.length+"px";
                		c = elsp.length-1;
                		liu.innerHTML = 6;
                	}else{
                		liu.innerHTML = c+1;
                	}
                	span2();
                	move(ztp,"left",-width2*c,30,function(){
                		if(c==erimg.length-1){
                			ztp.style.left = 0+"px";
                			c = 0;
                		}
                	});
                }
                but4.onmousedown = function(){
                	c++;
                	if(c==elsp.length+1){
                		c=1;
                		ztp.style.left = 0+"px";
                	}
                	if(c==erimg.length-1){
                		liu.innerHTML = 1;
                	}else{
                		liu.innerHTML = c+1;
                	}
                	span2();move(ztp,"left",-width2*c,30,function(){
                		if(c==erimg.length-1){
                			ztp.style.left = 0+"px";
                			c = 0;
                		}
                	});
                }
                dongtu.onmouseover = function(){
                	clearInterval(time2);
                	but3.style.display = "block";
                	but4.style.display = "block";
                }
                dongtu.onmouseout = function(){
                	time2 = setInterval(fn1,4800);
                	but3.style.display = "none";
                	but4.style.display = "none";
                }
                
//              轮播图3
                var lunbo3 = document.getElementById("lunbo3");
                var lunbo3_01 = document.getElementById("lunbo3_01");
                var lbdiv = lunbo3_01.getElementsByTagName("div");
                var g = 0;
                var height = lbdiv[0].offsetHeight;
                var time3 = setInterval(lb3,4000);
                function lb3(){
                	g++;
                	move(lunbo3_01,"top",-height*g,30,function(){
                		if(g==lbdiv.length-1){
                            lunbo3_01.style.top = 0+"px";
                		    g=0;
            		    }
                	});
                }
                lunbo3.onmouseover =function(){
                	clearInterval(time3);
                }
                lunbo3.onmouseout = function(){
                	time3 = setInterval(lb3,4800);
                }
                window.onblur = function(){
                	clearInterval(time);
                	clearInterval(time2);
                	clearInterval(time3);
                }
                
                window.onfocus = function(){
                	clearInterval(time);
					time = setInterval(fn,5000);
					clearInterval(time2);
                	time2 = setInterval(fn1,4800);
                	clearInterval(time3);
                	time3 = setInterval(lb3,4800);
                }
//              充话费
                var rierji1 = document.getElementById("rierji1");
                var rierji2 = document.getElementById("rierji2");
                var rierji3 = document.getElementById("rierji3");
                var li_01 = document.getElementById("li_01");
                var li_02 = document.getElementById("li_02");
                var li_03 = document.getElementById("li_03");
                var li_04 = document.getElementById("li_04");
                var cuo1 = document.getElementById("cuo1");
                var cuo2 = document.getElementById("cuo2");
                var cuo3 = document.getElementById("cuo3");
                li_01.onmouseover = function(){
                	rierji1.style.display = "block";
                	rierji2.style.display = "none";
                	rierji3.style.display = "none";
                	li_02.style.borderColor = "#f4f4f4";
                	li_03.style.borderColor = "#f4f4f4";
                	li_01.style.borderColor = "red";
                	li_01.style.borderBottomColor = "#ffffff";
                	li_02.style.borderBottomColor = "red";
                	li_03.style.borderBottomColor = "red";
                	li_04.style.borderBottomColor = "red";
                }
                li_02.onmouseover = function(){
                	rierji2.style.display = "block";
                	rierji1.style.display = "none";
                	rierji3.style.display = "none";
                	li_01.style.borderColor = "#f4f4f4";
                	li_03.style.borderColor = "#f4f4f4";
                	li_02.style.borderColor = "red";
                	li_02.style.borderBottomColor = "#ffffff";
                	li_01.style.borderBottomColor = "red";
                	li_03.style.borderBottomColor = "red";
                	li_04.style.borderBottomColor = "red";
                	li_01.style.borderRightColor = "red";
                }
                li_03.onmouseover = function(){
                	rierji3.style.display = "block";
                	rierji1.style.display = "none";
                	rierji2.style.display = "none";
                	li_01.style.borderColor = "#f4f4f4";
                	li_02.style.borderColor = "#f4f4f4";
                	li_03.style.borderColor = "red";
                	li_03.style.borderBottomColor = "#ffffff";
                	li_01.style.borderBottomColor = "red";
                	li_02.style.borderBottomColor = "red";
                	li_04.style.borderBottomColor = "red";
                	li_02.style.borderRightColor = "red";
                }
                cuo1.onmousedown = function(){
                	rierji1.style.display = "none";
                	li_01.style.borderColor = "#f4f4f4";
                	li_02.style.borderColor = "#f4f4f4";
                	li_03.style.borderColor = "#f4f4f4";
                	li_04.style.borderColor = "#f4f4f4";
                }
                cuo1.onmouseover = function(){
                	cuo1.style.backgroundColor = "#999999";
                }
                cuo1.onmouseout = function(){
                	cuo1.style.backgroundColor = "#ffffff";
                }
                cuo2.onmousedown = function(){
                	rierji2.style.display = "none";
                	li_01.style.borderColor = "#f4f4f4";
                	li_02.style.borderColor = "#f4f4f4";
                	li_03.style.borderColor = "#f4f4f4";
                	li_04.style.borderColor = "#f4f4f4";
                }
                cuo2.onmouseover = function(){
                	cuo2.style.backgroundColor = "#999999";
                }
                cuo2.onmouseout = function(){
                	cuo2.style.backgroundColor = "#ffffff";
                }
                cuo3.onmousedown = function(){
                	rierji3.style.display = "none";
                	li_01.style.borderColor = "#f4f4f4";
                	li_02.style.borderColor = "#f4f4f4";
                	li_03.style.borderColor = "#f4f4f4";
                	li_04.style.borderColor = "#f4f4f4";
                }
                cuo3.onmouseover = function(){
                	cuo3.style.backgroundColor = "#999999";
                }
                cuo3.onmouseout = function(){
                	cuo3.style.backgroundColor = "#ffffff";
                }
//              距结束
                var dspan_01 = document.getElementById("dspan_01");
                var dspan_02 = document.getElementById("dspan_02");
                var dspan_03 = document.getElementById("dspan_03");
                var shi = 1;
                var fen = 59;
                var miao = 60;
                var ling = 0;
                var time4 = setInterval(djs,1000);
                function djs(){
                	miao--;
                	if(shi<10){
                		dspan_01.innerHTML = "0"+shi;
                	}else{
                		dspan_01.innerHTML = shi;
                	}
                	if(fen<10){
                		dspan_02.innerHTML = "0"+fen;
                	}else{
                		dspan_02.innerHTML = fen;
                	}
                	if(miao<10){
                		dspan_03.innerHTML = "0"+miao;
                	}else{
                		dspan_03.innerHTML = miao;
                	}
                	if(miao<=0){
                		fen = fen-1;
                		miao = 60;
                	}
                	if(fen<=0){
                		shi = shi-1;
                		fen = 59;
                	}
                	if(shi<0){
                		dspan_01.innerHTML = "00";
                		dspan_02.innerHTML = "00";
                		dspan_03.innerHTML = "00";
                		clearInterval(time4);
                	}
                } 
//              猜你喜欢
                var box14_02 = document.getElementById("box14_02");
                var xhr = createxhr();
                xhr.open("GET","js/shouye.json",true);
				xhr.send(null);
				xhr.onreadystatechange = function(){
					if(xhr.readyState==4&&xhr.status==200){
						var res = JSON.parse(xhr.responseText);
						for(var i=0;i<res.length;i++){
							var div1 = document.createElement("div");
							box14_02.appendChild(div1);
							if(i>5){
								div1.className = "xiazhuang xztop";
							}else{
								div1.className = "xiazhuang";
							}
							var img1 = document.createElement("img");
							div1.appendChild(img1);
							img1.src = res[i].src1;
							var p1 = document.createElement("p");
							div1.appendChild(p1);
							p1.className = "xz_01";
							p1.innerHTML = res[i].xz_01;
							var p2 = document.createElement("p");
							div1.appendChild(p2);
							p2.className = "xz_02";
							var span1 = document.createElement("span");
							p2.appendChild(span1);
							if(res[i].xz_03==""){
								
							}else{
								span1.className = "xz_03";
								span1.innerHTML = res[i].xz_03;
							}
							var span2 = document.createElement("span");
							p2.appendChild(span2);
							span2.className = "xz_04";
							span2.innerHTML = res[i].xz_04;
							var span3 = document.createElement("span");
							p2.appendChild(span3);
							span3.className = "xz_05";
							span3.innerHTML = res[i].xz_05;
							var span4 = document.createElement("span");
							p2.appendChild(span4);
							span4.className = "xz_06";
							if(res[i].xz_06==""){
								
							}else{
								span4.innerHTML = res[i].xz_06;
							}
							var div2 = document.createElement("div");
							div1.appendChild(div2);
							div2.className = "xz_07";
							var div3 = document.createElement("div");
							div2.appendChild(div3);
							div3.className = "xz_07_01";
							var p3 = document.createElement("p");
							div3.appendChild(p3);
							p3.className = "zxs_01";
							var img2 = document.createElement("img");
							p3.appendChild(img2);
							img2.src = res[i].src2;
							var span5 = document.createElement("span");
							p3.appendChild(span5);
							span5.innerHTML = res[i].sp1;
							var p4 = document.createElement("p");
							div3.appendChild(p4);
							p4.className = "zxs_02";
							p4.innerHTML = res[i].zxs_02;
						}
					}
				}
//				隐藏搜索框
                window.onscroll = function(){
	                var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
	                var tbsosu = document.getElementById("tbsosu");
//	                console.log(scrollTop);
	                if(scrollTop>=168){
	                	tbsosu.style.display = "block";
	                }else{
	                	tbsosu.style.display = "none";
	                }
                }

			}
//			弹框
			$(function(){
				var $li = $(".tk li:lt(5)");
				$li.eq(0).css("background-color","#FF780F");
				$(this).find("a").eq(0).css("color","white");
				$li.on("click",function(){
					$(this).css("background-color","#FF780F");
					$(this).siblings().css("background-color","");
					$(this).find("a").css("color","white");
					$(this).siblings().find("a").css("color","");
				});
//				公告、规则
                $gli = $(".right_03 li");
                $gli.eq(0).find(".a1").css({"border-bottom":"2px solid red","font-weight":"700"});
            	$gli.eq(0).siblings().find(".a1").css({"border-bottom":"","font-weight":""});
            	$gli.eq(0).find("div").css("display","block");
            	$gli.eq(0).siblings().find("div").css("display","none");
                $gli.on("mouseover",function(){
                	$(this).find(".a1").css({"border-bottom":"2px solid red","font-weight":"700"});
                	$(this).siblings().find(".a1").css({"border-bottom":"","font-weight":""});
                	$(this).find("div").css("display","block");
                	$(this).siblings().find("div").css("display","none");
                });
//				亲，请登录
                $(".qdl").on("click",function(){
                	open("denglu.html");
                });
                if(getCookie("chuan")){
                	$(".qdl").html(getCookie("chuan"));
                }
			})
			$(window).scroll(function(){
				if($(document).scrollTop()>=285){
					$(".tkli_06").css("display","block");
				}else{
					$(".tkli_06").css("display","none");
				}
				if($(document).scrollTop()<=440){
					$(".tk").css("position","absolute");
					$(".tk").css("top","500px");
				}else{
					$(".tk").css("position","fixed");
					$(".tk").css("top","55px");
				}
				var $li = $(".tk li:lt(5)");
				if($(document).scrollTop()>=955){
					$li.eq(0).css("background-color","#FF780F");
					$li.eq(0).find("a").css("color","white");
					$li.eq(0).siblings().css("background-color","");
					$li.eq(0).siblings().find("a").css("color","");
				}
				if($(document).scrollTop()>=1970){
					$li.eq(1).css("background-color","#FF780F");
					$li.eq(1).find("a").css("color","white");
					$li.eq(1).siblings().css("background-color","");
					$li.eq(1).siblings().find("a").css("color","");
				}
				if($(document).scrollTop()>=2800){
					$li.eq(2).css("background-color","#FF780F");
					$li.eq(2).find("a").css("color","white");
					$li.eq(2).siblings().css("background-color","");
					$li.eq(2).siblings().find("a").css("color","");
				}
				if($(document).scrollTop()>=3600){
					$li.eq(3).css("background-color","#FF780F");
					$li.eq(3).find("a").css("color","white");
					$li.eq(3).siblings().css("background-color","");
					$li.eq(3).siblings().find("a").css("color","");
				}
				if($(document).scrollTop()>=4830){
					$li.eq(4).css("background-color","#FF780F");
					$li.eq(4).find("a").css("color","white");
					$li.eq(4).siblings().css("background-color","");
					$li.eq(4).siblings().find("a").css("color","");
				}
				var $list = $(".tk li");
				$list.eq(5).on("click",function(){
					$(document).scrollTop(0);
					$li.eq(0).css("background-color","#FF780F");
					$li.eq(0).find("a").css("color","white");
					$li.eq(0).siblings().css("background-color","");
					$li.eq(0).siblings().find("a").css("color","");
				});
				$list.eq(0).on("click",function(){
					$(document).scrollTop(955);
				});
				$list.eq(1).on("click",function(){
					$(document).scrollTop(1970);
				});
				$list.eq(2).on("click",function(){
					$(document).scrollTop(2800);
				});
				$list.eq(3).on("click",function(){
					$(document).scrollTop(3600);
				});
				$list.eq(4).on("click",function(){
					$(document).scrollTop(4830);
				});
			})