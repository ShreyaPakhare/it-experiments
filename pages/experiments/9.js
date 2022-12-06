function Experiment9() {
    return (
      <section className='w-full min-h-[80vh] bg-gray-50 p-3 md:p-6 lg:p-9 overflow-x-scroll'>
          <pre className='font-montserrat text-base font-medium'>
            &lt;html&gt; <br />
            &lt;head&gt; <br />
            &lt;title&gt;Calculator&lt;/title&gt; <br />
            &lt;script&gt; <br />
            function calc() {"{"} <br />
            var n1=parseInt(document.getElementById('n1').value); <br />
            var n2=parseInt(document.getElementById('n2').value); <br />
            var oper=document.getElementById('operators').value; <br />
            if(oper === '+') {"{"} <br />
            document.getElementById('result').value=n1+n2; <br />
            {"}"} <br />
            if(oper === '-') {"{"} <br />
            document.getElementById('result').value=n1-n2; <br />
            {"}"} <br />
            if(oper === '/') {"{"} <br />
            document.getElementById('result').value=n1/n2; <br />
            {"}"} <br />
            if(oper === '*') {"{"} <br />
            document.getElementById('result').value=n1*n2; <br />
            {"}"} <br />
            {"}"} <br />
            &lt;/script&gt; <br />
            &lt;/head&gt; <br />
            &lt;body&gt; <br />
            &lt;lable for="n1"&gt;N1:&lt;/lable&gt; <br />
            &lt;input type="text" id="n1" /&gt;&lt;/br&gt;&lt;/br&gt; <br />
            &lt;lable for="n2"&gt;N2:&lt;/lable&gt; <br />
            &lt;input type="text" id="n2" /&gt;&lt;/br&gt;&lt;/br&gt; <br />
            &lt;select id="operators"&gt; <br />
            &lt;option value="+"&gt;+&lt;/option&gt; <br />
            &lt;option value="-"&gt;-&lt;/option&gt; <br />
            &lt;option value="/"&gt;/&lt;/option&gt; <br />
            &lt;option value="*"&gt;*&lt;/option&gt; <br />
            &lt;/select&gt; <br />
            &lt;lable&gt;Result:&lt;/lable&gt; <br />
            &lt;button onclick="calc();"&gt;=&lt;/button&gt; <br />
            &lt;input type="text" id="result" /&gt; <br />
            &lt;/body&gt; <br />
            &lt;/html&gt; <br />
          </pre>
      </section>
    );
};
  
export default Experiment9;