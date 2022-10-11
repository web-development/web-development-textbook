# frozen_string_literal: true

class IncludesFilter < Nanoc::Filter
  identifier :includes

  def load_lines(file, lines)
    path = "includes/#{file}"
    puts "include lines #{lines} from #{path}"

    all_lines = File.readlines(path)

    report = 'extracting lines: '

    filtered_lines = if lines.match(/^[\d\-,]+$/)
                       lines.split(/,/).map do |r|
                         case r
                         when /^(\d+)-(\d+)$/
                           report += "#{Regexp.last_match(1)}-#{Regexp.last_match(2)}"
                           all_lines[Range.new(Regexp.last_match(1).to_i - 1, Regexp.last_match(2).to_i - 1)]
                         when /^\d+$/
                           report += r
                           all_lines[r.to_i - 1]
                         else
                           report += "**error** reading lines #{r} from #{path}\n"
                         end
                       end
                     # filtered_lines = ["# #{lines} #{report}\n"] + filtered_lines
                     else
                       all_lines
                     end

    %(<div class="example">\n<pre class="lang-shell prettyprint linenums">\n#{filtered_lines.join}</pre></div>)
    # puts result
  rescue StandardError => e
    result = "Error reading #{path} from #{Dir.pwd}: #{e.message}"
    puts result
    result
  end

  def run(content, _params = {})
    content.gsub(/<p>§include ([^\s<]+)\s*([^\n]*)<.p>$/) do
      load_lines(Regexp.last_match(1), Regexp.last_match(2))
    end
  end
end
