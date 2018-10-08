<script language="javascript" src="validateReg.js"></script>




<form method="post" action="mailto:afadf@afdsfs.com" onsubmit="return validate();">
	
	<fieldset><legend>Registration Form</legend>
		<table>
			
			<tr>
				<td>userName:<i>*</i></td>
				<td><input type="text" name="name"/></td>
			</tr>
			
			<tr>
				<td>email:<i>*</i></td>
				<td><input type="text" name="email"/></td>
			</tr>

			<tr>
				<td>Password:<i>*</i></td>
				<td><input type="password" name="password"/></td>
			<tr>
	
			<tr>
				<td>age:</td>
				<td><radio>
					<button /> 18-29
					<option /> 30-39
					<option /> 40-49
					<option /> 50-59
					</radio>
				</td>
			</tr>	
		 	
			<tr>
				<td>Road quality:</td>
				<td><select>
					<option /> crap
					<option /> poor
					<option /> normal
					<option /> smooth
					<option /> glass

					</select>
				</td>
			</tr>
					
			<tr>
				<td>receive news:</td>
				<td><input type="checkbox"/></td>
			</tr>
		</table>
	</fieldset>
</form>			