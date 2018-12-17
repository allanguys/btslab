/*
JS��ȫAPI v1.1
Created By Web Application Security Group of TSC
UpDate: 2007-12-08
*/

/*
urlת����֤
��������ͨ��javascript������루��ת�򣩵�ҳ�������֤����ֹת����������ҳ�Ϳ�վ�ű�����
����ֵ��true -- �Ϸ���false -- �Ƿ�
����
�Ϸ���ֵ
    http://xxx.qq.com/hi/redirect.html?url=http://www.qq.com
    http://xxx.qq.com/hi/redirect.html?url=a.html
    http://xxx.qq.com/hi/redirect.html?url=/a/1.html
�Ƿ���ֵ
    http://xxx.qq.com/hi/redirect.html?url=http://www.baidu.com
    http://xxx.qq.com/hi/redirect.html?url=javascript:codehere
    http://xxx.qq.com/hi/redirect.html?url=//www.qq.com
*/
function VaildURL(sUrl)
{
	return (/^(https?:\/\/)?[\w\-.]+\.(qq|taotao)\.com($|\/|\\)/i).test(sUrl)||(/^[\w][\w\/\.\-_%]+$/i).test(sUrl)||(/^[\/\\][^\/\\]/i).test(sUrl) ? true : false;
}


//html���ı��룺����Ҫ������HTML������(����HTML������)�Ĳ�����������б���
function HtmlEncode(sStr)
{
	sStr = sStr.replace(/&/g,"&amp;");
	sStr = sStr.replace(/>/g,"&gt;");
	sStr = sStr.replace(/</g,"&lt;");
	sStr = sStr.replace(/"/g,"&quot;");
	sStr = sStr.replace(/'/g,"&#39;");
	return sStr;
}

//html���Ľ��룺��HtmlEncode�����Ľ�����н���
function HtmlUnEncode(sStr)
{
	sStr = sStr.replace(/&amp;/g,"&");
	sStr = sStr.replace(/&gt;/g,">");
	sStr = sStr.replace(/&lt;/g,"<");
	sStr = sStr.replace(/&quot;/g,'"');
	sStr = sStr.replace(/&#39;/g,"'");
	return sStr;
}

/*
html���Ա��룺����Ҫ������HTML������Ĳ�����������б���
ע��:
(1)�ú���������������Ϊһ��URL��ַ�ı���.��Щ��ǰ���:a/img/frame/iframe/script/xml/embed/object...
���԰���:href/src/lowsrc/dynsrc/background/...
(2)�ú�����������������Ϊ style="[Un-trusted input]" �ı���
*/
function HtmlAttributeEncode(sStr)
{
	sStr = sStr.replace(/&/g,"&amp;");
	sStr = sStr.replace(/>/g,"&gt;");
	sStr = sStr.replace(/</g,"&lt;");
	sStr = sStr.replace(/"/g,"&quot;");
	sStr = sStr.replace(/'/g,"&#39;");
	sStr = sStr.replace(/=/g,"&#61;");
	sStr = sStr.replace(/`/g,"&#96;");
	return sStr;
}


/*
����Ҫ������һ��URI��һ���ֵĲ�����������б��� 
����:
<a href="http://search.msn.com/results.aspx?q1=[Un-trusted-input]& q2=[Un-trusted-input]">Click Here!</a>
�����ַ����ᱻ����: 
��[a-zA-Z0-9.-_]������ַ����ᱻ�滻��URL����
*/
function UriComponentEncode(sStr)
{
	sStr = encodeURIComponent(sStr);
	sStr = sStr.replace(/~/g,"%7E");
	sStr = sStr.replace(/!/g,"%21");
	sStr = sStr.replace(/\*/g,"%2A");
	sStr = sStr.replace(/\(/g,"%28");
	sStr = sStr.replace(/\)/g,"%29");
	sStr = sStr.replace(/'/g,"%27");
	sStr = sStr.replace(/\?/g,"%3F");
	sStr = sStr.replace(/;/g,"%3B");
	return sStr;
}


//��������HTML��ǩ����Ķ��� ��������������<input value="XXXX">  XXXX����Ҫ���˵�
String.prototype.escHtmlEp = function() { return this.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(r){ return "&#"+r.charCodeAt(0)+";" }); };

//��������ֱ�ӷŵ�HTML���
String.prototype.escHtml = function() { return this.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r){ return "&#"+r.charCodeAt(0)+";" }).replace(/\r\n/g, "<BR>").replace(/\n/g, "<BR>").replace(/\r/g, "<BR>").replace(/ /g, "&nbsp;"); };

//��������ֱ�ӷŵ�HTML��js�е�
String.prototype.escScript = function() { return this.replace(/[\\"']/g, function(r){ return "\\"+r; }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01"); };

//��������ֱ��URL�������  ���� http://show8.qq.com/abc_cgi?a=XXX  XXX����Ҫ���˵�
String.prototype.escUrl = function() { return escape(this).replace(/\+/g, "%2B"); };

//��������ֱ�ӷŵ�<a href="javascript:XXXX">�е�
String.prototype.escHrefScript = function() { return this.escScript().escMiniUrl().escHtmlEp(); };

//��������ֱ�ӷŵ�������ʽ�е�
String.prototype.escRegexp = function() { return this.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a,b){ return "\\"+a; }); };

